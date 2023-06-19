import React from 'react';
import {Container} from "components/Container";
import styled from "styled-components";
import RangeSlider from "components/rangeSlider/RangeSlider";
import {Button} from "components/button.styled/Button";
import search from 'assets/icons/loupe.svg'
import filter from 'assets/icons/filter.svg'

const Main = () => {
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

`

const SearchIcon = styled.img`
  position: absolute;
  z-index: 99999;
  bottom: 530px;
  left: 155px;
`
const MyButton = styled.button`
  border: 1px solid #D9D9D9;
  border-radius: 2px;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  padding: 8px 40px 10px 40px;
`

const AllButton = styled.button`
  border: 1px solid #D9D9D9;
  border-radius: 2px;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  padding: 8px 40px 10px 40px;
  background: #366EFF;
  color: #FFFFFF;
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