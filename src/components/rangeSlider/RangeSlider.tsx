import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import styled from "styled-components";

function valuetext(value: number) {
    return `${value}°C`;
}

export default function RangeSlider() {
    const [value, setValue] = React.useState<number[]>([20, 37]);

    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number[]);
    };

    return (
        <Container>
            <RangeButton>2</RangeButton>
            <Box sx={{ width: 155 }}>
                <Slider
                    getAriaLabel={() => 'Temperature range'}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                />
            </Box>
            <RangeButton>20</RangeButton>
        </Container>
    );
}
const RangeButton = styled.button`
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  border: 1px solid #D9D9D9;
  border-radius: 2px;
  text-align: center;
  width: 36px;
  height: 36px;
`
const Container = styled.div`
    display: flex;
`