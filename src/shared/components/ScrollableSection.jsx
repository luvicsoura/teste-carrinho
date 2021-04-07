import React, { PureComponent } from 'react';
import styled from 'styled-components';

const ScrollableContainer = styled.div`
    height: 100%;
    overflow-y: hidden;
    padding-right: 5px;

    &.hasOverflow:hover {
        padding-right: 0;
    }

    ::-webkit-scrollbar-track {
        box-shadow: none;
        background-color: rgba(0,0,0,.1);
        border-radius: 16px;
    }

    ::-webkit-scrollbar {
        width: 5px;
        position: absolute;
        background-color: #F5F5F5;
    }

    ::-webkit-scrollbar-thumb {
        background-color: rgba(0,0,0,.3);
        border-radius: 16px; 
    }

    :hover {
        overflow-y: auto;
    }
`

export class ScrollableSection extends PureComponent {

    containerRef = React.createRef();
    contentRef = React.createRef();

    state = {
        hasOverflow: false
    }

    componentDidMount() {
        this.updateOverflow();
    }

    componentDidUpdate(previousProps) {
        this.updateOverflow();
    }

    updateOverflow() {
        this.setState({
            hasOverflow: this.hasOverflow()
        })
    }

    hasOverflow() {

        const container = this.getContainerElement();
        const containerHeight = container.getBoundingClientRect().height;
        const content = this.getContentElement();
        const contentHeight = content.getBoundingClientRect().height;

        return contentHeight > containerHeight;
    }

    getContainerElement() {
        return this.containerRef.current;
    }

    getContentElement() {
        return this.contentRef.current;
    }

    render() {
        return (
            <ScrollableContainer
                ref = { this.containerRef }
                className = { this.state.hasOverflow ? 'hasOverflow' : ''}
            >
                <div
                    ref = { this.contentRef }
                    className = {`ScrollableSection--content ${this.props.className || ''}`}
                >
                    { this.props.children }
                </div>
            </ScrollableContainer>
        )
    }
}