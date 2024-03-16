import React from 'react'
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

function Product() {
  return (
    <div>
        <div className='flex_center mt-5 mb-5'>
            <h3 className='c-primaryKey css-text-uppercase'>
                Số lượng sản phẩm sản xuất hôm nay
            </h3>
        </div>
        {/* <div className=' mt-5 mb-5'>
                 <div className='col-xl-3 col-lg-4 col-md-6 col-sm-12'>
                    <Form.Select aria-label="Default select example">
                        <option disabled selected>Chọn mốc thời gian</option>
                        <option value="1">Hôm nay</option>
                        <option value="2">Hôm qua</option>
                        <option value="3">Tuần này</option>
                        <option value="1">Tuần trước</option>
                        <option value="2">Tháng này</option>
                        <option value="3">Tháng này</option>
                    </Form.Select>
                </div>
        </div> */}
        <div className='row'>
         
            <div className='col-xl-3 col-lg-4 col-md-6 col-sm-12'>
            <Card className='bg-red card-admin flex_center'>
                <p>Màu đỏ</p>
                <Card.Title className='titel-card-admin'>5</Card.Title>
            </Card>
            </div>
            <div className='col-xl-3 col-lg-4 col-md-6 col-sm-12'>
            <Card className='bg-warning card-admin flex_center'>
            <p>Màu vàng</p>
                <Card.Title className='titel-card-admin'>5</Card.Title>
            </Card>
            </div>
            <div className='col-xl-3 col-lg-4 col-md-6 col-sm-12'>
            <Card className='bg-blue card-admin flex_center'>
            <p>Màu xanh</p>
                <Card.Title className='titel-card-admin'>5</Card.Title>
            </Card>
            </div>
            <div className='col-xl-3 col-lg-4 col-md-6 col-sm-12'>
            <Card className='bg-greenYellow card-admin flex_center'>
            <p>Tổng</p>
                <Card.Title className='titel-card-admin'>5</Card.Title>
            </Card>
            </div>
        </div>
    </div>
  )
}

export default Product
