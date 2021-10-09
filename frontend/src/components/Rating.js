import React from 'react'

const Rating = (props) => {
    const { rating, numReviews} = props
    return (
        <div className="rating">
        {/*  <!-- half-o  is half star in the rating--> */}
        {/*  <!-- -o  is empty star in the rating--> */}

        {/* condtion if the rating(property in data obj)= 1 or >1 run the true conditon make class name(fa fa-star") full star .the false condtion is if the valve =0.5 then make the class name half-o otherwise make the class name ("fa fa-star-o")empty star */}
         <span> 
             <i className={rating >=1 
                ?"fa fa-star"
                : rating >=0.5
                ?"fa fa-star-half-o" 
                : "fa fa-star-o"}>

             </i>
         </span>
         <span>
                <i className={rating >=2
                    ?"fa fa-star"
                    : rating >=1.5
                    ?"fa fa-star-half-o" 
                    : "fa fa-star-o"}>
                    
                </i>
        </span>
         <span> 
             <i className={rating >=3
                ?"fa fa-star"
                : rating >=2.5
                ?"fa fa-star-half-o" 
                : "fa fa-star-o"}>
                 
             </i>
        </span>
         <span>
              <i className={rating >=4 
                ?"fa fa-star"
                : rating >=3.5
                ?"fa fa-star-half-o" 
                : "fa fa-star-o"}>
                 
             </i>
        </span>
         <span> 
             <i className={rating >=5
                ?"fa fa-star"
                : rating >=4.5
                ?"fa fa-star-half-o" 
                : "fa fa-star-o"}>
                    
             </i> 
        </span>
        <span>
            {numReviews  + '  ' + 'reviews'}
        </span>
     </div>
    );
};

export default Rating
