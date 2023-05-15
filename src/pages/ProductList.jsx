import React from "react";
import styled from "styled-components";
import Navbar from '../components/Navbar';
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newletter from "../components/Newletter";
import Footer from "../components/Footer";


const Container = styled.div``;
const Title = styled.h1`margin: 20px;`;
const FilterContainer = styled.div`display: flex; justify-content: space-between;`;
const Filter = styled.div`
margin: 20px;`;


const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
 `;

const Select = styled.select`
 padding: 10px;
 margin-right: 20px;

 `;
const option = styled.option``

const Productlist = () => {
    return (
        <Container>
                    <FilterContainer>
                        <Filter><FilterText>Filter Products:</FilterText>
                            <Select>
                                <option disabled selected>
                                    color
                                </option>
                                <option>White</option>
                                <option>Black</option>
                                <option>Red</option>
                                <option>Blue</option>
                                <option>Green</option>

                            </Select>
                            <Select>
                                <option disabled selected>
                                    Size
                                </option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>

                            </Select>

                            <Filter>
                                <FilterText>Sort Products:</FilterText>
                            </Filter>
                            <Select>
                                <option defaultValue={0}>Newest</option>
                                <option>Price (asc)</option>
                                <option>Price (desc)</option>
                            </Select>

                        </Filter>

                    </FilterContainer>
                    <Products />
                    <Newletter />
                    <Footer />
                </Container>
    )
}

                export default Productlist