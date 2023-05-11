import { styled } from "styled-components";

const TagWrapper = styled.div`
    display: flex;
`;

const Tag = styled.span`
    display: inline-block;
    background-color: #e5e5e5;
    text-transform: uppercase;
    color: black;
    font-size: .5rem;
    padding: .1rem .25rem;
    border: 1px solid #dadada;
    border-radius: .5rem;
`;

/**
 * Generic component for displaying a small tag with the provided title
 * 
 * @param {{ title: string }} props Props of the React component
 */
export const TagComponent = ({ title }) => {
    return (
        <TagWrapper data-testid='tag-container'>
            <Tag>{title}</Tag>
        </TagWrapper>
    )
}