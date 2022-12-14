import styled from "@emotion/styled";


const Boton = styled.button`
    font-weight: 700;
    text-transform: uppercase;
    border: 1px solid gray;
    padding: .8rem 2rem;
    margin-right: 1rem;
    background-color: ${props => props.bgColor ? '#DA552F' : 'white'} ;
    color: ${props => props.bgColor ? 'white' : '#000'};
    border-radius: 8px;

    &:last-of-type {
        margin-right: 0;
    }

    &:hover{
        cursor: pointer;
    }
`;


export default Boton