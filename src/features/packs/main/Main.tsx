import React from 'react';
import {Container} from "components/Container";
import styled from "styled-components";
import RangeSlider from "components/rangeSlider/RangeSlider";
import {Button} from "components/button.styled/Button";
import search from 'assets/icons/loupe.svg'
import filter from 'assets/icons/filter.svg'
import arrow from 'assets/icons/updateArrow.svg'
import {useSelector} from "react-redux";
import {RootState} from "../../../app/store";
import {Navigate} from "react-router-dom";

const Main = () => {
    const isInitialized = useSelector<RootState>(state => state.app.isInitialized);
    const packs = useSelector<RootState>(state => state.packs.packs)
    console.log(packs)

    if (isInitialized) {
        return <Navigate to={'/'}/>
    }

    return (
        <MainDiv>
            <Container>
                <div>
                    <TitleButtonBox>
                        <Title>Packs list</Title>
                        <Button>Add new pack</Button>
                    </TitleButtonBox>
                    <ButtonsContainer>
                        <SearchBox>
                            <TitleOfButtons>Search</TitleOfButtons>
                            <SearchIcon src={search} alt={'search button'}/>
                            <InputStyled placeholder={'Provide your text...'}/>
                        </SearchBox>
                        <div>
                            <TitleOfButtons>Show packs cards</TitleOfButtons>
                            <div>
                                <MyButton>My</MyButton>
                                <AllButton>All</AllButton>
                            </div>
                        </div>
                        <div>
                            <TitleOfButtons>Number of cards</TitleOfButtons>
                            <RangeSlider/>
                        </div>
                        <FilterButtonBox>
                            <FilterButton><img src={filter} alt={'filter icon'}/></FilterButton>
                        </FilterButtonBox>
                    </ButtonsContainer>
                </div>
                <div>
                    <TableContainer>
                        <tr>
                            <StyledTableHeader>Name</StyledTableHeader>
                            <th>Cards</th>
                            <StyledTableHeader>Last Updated<img src={arrow} alt={'Sort icon'}/></StyledTableHeader>
                            <StyledTableHeader>Created by</StyledTableHeader>
                            <StyledTableHeader>Actions</StyledTableHeader>
                        </tr>
                        <tr>
                            <StyledTableText>Ячейка 1</StyledTableText>
                            <td>Ячейка 2</td>
                            <StyledTableText>Ячейка 3</StyledTableText>
                            <td>Ячейка 3</td>
                            <StyledTableText>Ячейка 3</StyledTableText>
                        </tr>
                    </TableContainer>
                </div>
            </Container>
        </MainDiv>
    );
};

export default Main;

const MainDiv = styled.div`
  min-height: 100vh;
  padding-top: 96px;
`
const Title = styled.h2`
  font-weight: 600;
  font-size: 22px;
  line-height: 27px;
`
const TitleButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 40px;
`
const TitleOfButtons = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  margin-bottom: 8px;
`
const ButtonsContainer = styled.div`
  display: flex;
`
const InputStyled = styled.input`
  width: 413px;
  height: 36px;
  background: #FFFFFF;
  border: 1px solid #D9D9D9;
  border-radius: 2px;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  padding-left: 32px;
  position: relative;

  &:focus {
    outline: 1px solid #8c8484;
  }
`
const SearchBox = styled.div`
  margin-right: 24px;
`

const SearchIcon = styled.img`
  position: absolute;
  z-index: 99999;
  /*  bottom: 530px;
    left: 180px;*/
  top: 27%;
  left: 18%;
`
const MyButton = styled.button`
  border: 1px solid #D9D9D9;
  border-radius: 2px;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  width: 97px;
  height: 36px;
`

const AllButton = styled.button`
  border: 1px solid #D9D9D9;
  border-radius: 2px;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  background: #366EFF;
  color: #FFFFFF;
  margin-right: 48px;
  width: 97px;
  height: 36px;
`
const FilterButton = styled.button`
  border: 1px solid #E8E8E8;
  border-radius: 2px;
  width: 40px;
  height: 36px;
  cursor: pointer;
`
const FilterButtonBox = styled.div`
  margin-left: 36px;
  padding-top: 17px;
`
const TableContainer = styled.table`
  border: 2px solid #EFEFEF;
  margin-top: 24px;
  height: 100%;
  border-collapse: collapse;

  th {
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    background: #EFEFEF;
    text-align: left;
    padding: 15px 0;
    border: 2px solid #EFEFEF;
  }

  tr {
    border: 2px solid #EFEFEF;
  }

  td {
    font-size: 13px;
    font-weight: 400;
    line-height: 16px;
    padding: 15px 0;
  }
`
const StyledTableHeader = styled.th`

  &:first-child {
    padding-left: 36px;
    padding-right: 218px;
  }

  &:nth-child(3) {
    padding-left: 164px;
    padding-right: 105px;
    display: flex;
    gap: 6px;
  }

  &:nth-child(5) {
    padding-left: 53px;
    padding-right: 54px;
  }
`;
const StyledTableText = styled.td`
  &:first-child {
    padding-left: 36px;
    padding-right: 218px;
  }

  &:nth-child(3) {
    padding-left: 164px;
    padding-right: 105px;
  }

  &:nth-child(5) {
    padding-left: 53px;
    padding-right: 54px;
  }
`