import React, { Component } from "react";

interface Props {
    selected: string,
    categories: string[],
    selectCategory: (category: string) => void; 
}

export class CategoryList extends Component<Props> {
    render() {
        return <div>
            {["Wszystkie", ...this.props.categories].map(c => {
                let category = this.props.selected === c ? "btn-primary" : "btn-secondary";
                return <button key={c}
                    className={`btn btn-block ${category}`}
                    onClick={() => this.props.selectCategory(c)}>
                    { c }
                </button>
            })}
        </div> 
    }
}