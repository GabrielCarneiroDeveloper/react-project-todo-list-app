import React, {Component} from 'react'

export default class Grid extends Component {
    // Handle grid classes

    toCssClasses(numbers) {
        /* Parse numbers to css classes
        *  
        *  usage: <Grid cols='12 3 4 6'><span>Hello!</span></Grid> 
        *  return: 
        * <div class='col-xs-12 col-sm-3 col-md-4 col-lg-6'>
        *       <span>Hello!</span>
        *  </div>
        */

        const cols = numbers ? numbers.split(" ") : [];
        let classes = "";

        if (cols[0]) classes += `col-xs-${cols[0]}`;
        if (cols[1]) classes += ` col-sm-${cols[1]}`;
        if (cols[2]) classes += ` col-md-${cols[2]}`;
        if (cols[3]) classes += ` col-lg-${cols[3]}`;

        return classes;
    }

    render() {
        const gridClasses = this.toCssClasses(this.props.cols || 12)
        return <div className={gridClasses}>{this.props.children}</div>;
    }
}