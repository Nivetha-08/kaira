import React from 'react';

const ProductCard = ({price, imageUrl }) => {
  return (
    
    <>
        {/* <div className="pro"> */}
            <div className="col-md-4">
                <div className="card">
                    <div className="card-img img-container">
                      <img src={imageUrl} className='img-fluid' alt="img" />
                    </div>
                </div>
                <p>{price}</p>
            </div>
        {/* </div> */}
    </>
  );
};

export default ProductCard;
