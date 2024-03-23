import React,{useState,useEffect} from 'react';
import { Select, MenuItem } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import DashboardCard from '../../../components/shared/DashboardCard';
import Chart from 'react-apexcharts';


const SalesOverview = () => {

    // select
    const [month, setMonth] = React.useState('1');
    const [titelStatical,setTitelStatichcal]=useState('');
    useEffect(()=>{
        setTitelStatichcal('7 ngày gần nhât')
        console.log('3123123');
    },[titelStatical])
    const handleChange = (event) => {
        const selectedValue = event.target.value;
        if (selectedValue === '7day') {
            setTitelStatichcal('7 ngày gần nhất');
        } else if (selectedValue === '7week') {
            setTitelStatichcal('7 tuần gần nhất');
        } else if (selectedValue === '6month') {
            setTitelStatichcal('6 tháng gần nhất');
        } else if (selectedValue === 'lastweek') {
            setTitelStatichcal('Tuần trước');
        } else if (selectedValue === 'weeknow') {
            setTitelStatichcal('Tuần này');
        }
    };

    // chart color
    const theme = useTheme();
    // const primary =n;
    // const secondary = theme.palette.secondary.main;

    // chart
    const optionscolumnchart = {
        chart: {
            type: 'bar',
            fontFamily: "'Plus Jakarta Sans', sans-serif;",
            foreColor: '#adb0bb',
            toolbar: {
                show: true,
            },
            height: 370,
        },
        colors: ["#ff6c60","#FCB322","#5D87FF"],
        plotOptions: {
            bar: {
                horizontal: false,
                barHeight: '60%',
                columnWidth: '42%',
                borderRadius: [6],
                borderRadiusApplication: 'end',
                borderRadiusWhenStacked: 'all',
            },
        },

        stroke: {
            show: true,
            width: 5,
            lineCap: "butt",
            colors: ["transparent"],
          },
        dataLabels: {
            enabled: false,
        },
        legend: {
            show: false,
        },
        grid: {
            borderColor: 'rgba(0,0,0,0.1)',
            strokeDashArray: 3,
            xaxis: {
                lines: {
                    show: false,
                },
            },
        },
        yaxis: {
            tickAmount: 4,
        },
        xaxis: {
            categories: ['16/08', '17/08', '18/08', '19/08', '20/08', '21/08', '22/08', '23/08'],
            axisBorder: {
                show: false,
            },
        },
        tooltip: {
            theme: theme.palette.mode === 'dark' ? 'dark' : 'light',
            fillSeriesColor: false,
        },
    };
    const seriescolumnchart = [
        {
            name: 'Màu đỏ',
            data: [280, 250, 325, 215, 250, 310, 280, 250],
        },
       {
            name: 'Màu vàng',
            data: [280, 250, 325, 215, 250, 310, 280, 250],
        },
        {
            name: 'Màu xanh',
            data: [355, 390, 300, 350, 390, 180, 355, 390],
        },

    ];

    return (

        <DashboardCard title={`Biểu đồ sản phẩm ${titelStatical}`} action={
                    <Select
                        labelId="month-dd"
                        id="month-dd"
                        value={titelStatical} // Sử dụng giá trị của titelStatical thay vì month
                        size="small"
                        onChange={handleChange}
                    >
                    
                <MenuItem value={`lastweek`} >Tuần trước</MenuItem>
                <MenuItem value={`7week`}>7 tuần gần nhất</MenuItem>
                <MenuItem value={`6month`}>6 tháng gần nhất</MenuItem>
                <MenuItem value={`weeknow`} >Tuần này</MenuItem>
                <MenuItem value={`7day`} >7 ngày gấn nhất</MenuItem>
            </Select>
        }>
            <Chart
                options={optionscolumnchart}
                series={seriescolumnchart}
                type="bar"
                height="370px"
            />
        </DashboardCard>
    );
};

export default SalesOverview;
