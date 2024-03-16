const staffModel = require('../model/staffModel');
const bcrypt = require('bcryptjs');
exports.getList = (req, res) => {
    try {
        const page = Number(req.query.page)||1;
        const limit = Number(req.query.limit)||10;
        const search = req.query.search||null;
        const fitler = req.query.fitler||null;
       staffModel.getList((error, results) => {
            if (error) {
                return res.status(500).json({ error: 'Database query error' });
            }
            if (results) {
                const arr=results.map((item,index)=>{
                    let categoryNameUser;
                    if(item.categoryUser===1){
                        categoryNameUser="Quản trị viên";
                    }
                    else if(item.categoryUser===2){
                        categoryNameUser="Nhân viên";
                    }
                    else if(item.categoryUser===3){
                        categoryNameUser="Nhân viên tạm thời";
                    }
                    return {
                        username: item.username,
                        fullname: item.fullname,
                        img: item.img,
                        note: item.note,
                        address: item.address,
                        status: item.status,
                        categoryUser:categoryNameUser,
                    };
                })
                return res.json({
                    status: "success",
                    results:arr,
                })
    
            }
        },page,limit,search,fitler)
    } catch (error) { 
        return res.json({ status: "fail", mess: "có lỗi xảy ra" });
    }
}
exports.createAcction = (req, res) => {
    try {
        const username = req.body.username;
        const password = req.body.password;
        const fullname = req.body.fullname;
        const role = req.body.role;
        const img = req.body.img??" ";
        const address = req.body.address;
        const note = req.body.note;
        const dataUser = {
            username: username,
            password:bcrypt.hashSync(password, 10),
            fullname: fullname,
            img: img,
            categoryUser: role,
            note: note,
            address: address,
            status: 1
        }
        staffModel.checkUsername((error, results) => {
            if (error) {
                return res.status(500).json({ error: 'Database query error' });
            }
            if (results) {
                return res.json({
                    status: "fail",
                    mess: "Tên đăng nhập này đã có vui lòng nhập 1 tên khác",
                })
    
            }

            staffModel.createUser((error, resultsUser) => {
                if (error) {
                    return res.status(500).json({ error: 'Database query error' });
                }
                if(resultsUser){
                    return res.json({
                        status: "success",
                        mess: "Thêm thành công",
                    })
        
                }

            },dataUser)
           
        },username)
      

    } catch (error) {
        return res.json({ status: "fail", mess: "có lỗi xảy ra" });
    }
}
exports.updateAcction = (req, res) => {
    try {
        const id = req.param.id;
        const username = req.body.username;
        const fullname = req.body.fullname;
        const role = req.body.role;
        const img = req.body.img??" ";
        const address = req.body.address;
        const note = req.body.note;
        const dataUser = {
            username: username,
            fullname: fullname,
            img: img,
            categoryUser: role,
            note: note,
            address: address,
        }
        staffModel.checkUsername((error, results) => {
            if (error) {
                return res.status(500).json({ error: 'Database query error' });
            }
            if (results) {
                return res.json({
                    status: "fail",
                    mess: "Tên đăng nhập này đã có vui lòng nhập 1 tên khác",
                })
    
            }

            staffModel.updateUser((error, resultsUser) => {
                if (error) {
                    return res.status(500).json({ error: 'Database query error' });
                }
                if(resultsUser){
                    return res.json({
                        status: "success",
                        mess: "Cập nhật thành công",
                    })
        
                }

            },dataUser)
           
        },username,id)
      

    } catch (error) {
        return res.json({ status: "fail", mess: "có lỗi xảy ra" });
    }
}