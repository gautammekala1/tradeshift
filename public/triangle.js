'use strict';
 class triangleComponent {

    constructor(hypo,oppo,adj) {
        this.hypo = hypo;
        this.oppo = oppo;
        this.adj = adj;

    }

    // Getter for triange type
    get triangleType() {

        return this.calcTriangeType();
    }


    calcTriangeType() {

      if (this.hypo === 0 || this.oppo === 0 || 
                    this.adj === 0) {

            return "Enter only Valid numbers";
    
        } else if (this.hypo < 0 || this.oppo < 0 || 
                    this.adj < 0) {

            return "Not Valid";

        } else if (this.hypo + this.oppo <= this.adj || 
                    this.hypo + this.adj <= this.oppo || 
                    this.oppo +this.adj <= this.hypo) {

            return "Invalid";

        }else if (this.hypo == this.oppo && 
                   this.oppo == this.adj) {

            return "equilateral";

        }else if (this.hypo === this.oppo || 
                    this.oppo === this.adj || 
                    this.hypo === this.adj) {

          return "isosceles";

        } else {
            return "scalene";
          }
    }
}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports =  triangleComponent;
}







 