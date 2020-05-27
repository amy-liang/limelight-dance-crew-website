import * as React from "react";
import styled from "styled-components";
import { Column } from "./Column";
import { Colors } from "../stores/Constants";
import { TextSliderSection } from "./TextSliderSection";

const Container = styled(Column)``;

interface IProps {
    sections: {
        title: string;
        paragraph: string;
    }[];
}

export class TextSlider extends React.Component<IProps> {
    render() {
        return (
            <Container>
                {this.props.sections.map((section, index) => (
                    <TextSliderSection
                        title={section.title}
                        paragraph={section.paragraph}
                    />
                ))}
            </Container>
        );
    }
}
