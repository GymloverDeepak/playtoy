import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container-fluid mt-4">
      <div className="text-center mb-5">
        <h1 className="display-4">Welcome to ToyStore!</h1>
        <p className="lead">Find the perfect toy for your little one.</p>
        <Link to="/products" className="btn btn-primary">Shop Now</Link>
      </div>

      <div className="row g-4 px-3">
        {/* Product 1 */}
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="card h-100 shadow-sm">
            <img src="/Photos/1.jpeg" className="card-img-top" alt="Toy 1" />
            <div className="card-body text-center">
              <h5 className="card-title">Teddy Bear</h5>
              <p className="card-text">
                <span className="text-danger fw-bold me-2">$15.00</span>
                <span className="text-muted text-decoration-line-through">$20.00</span>
              </p>
              <button className="btn btn-sm btn-outline-primary w-100">Buy Now</button>
            </div>
          </div>
        </div>

        {/* Product 2 */}
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="card h-100 shadow-sm">
            <img src="/Photos/2.jpeg" className="card-img-top" alt="Toy 2" />
            <div className="card-body text-center">
              <h5 className="card-title">Remote Car</h5>
              <p className="card-text">
                <span className="text-danger fw-bold me-2">$22.00</span>
                <span className="text-muted text-decoration-line-through">$30.00</span>
              </p>
              <button className="btn btn-sm btn-outline-primary w-100">Buy Now</button>
            </div>
          </div>
        </div>

        {/* Product 3 */}
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="card h-100 shadow-sm">
            <img src="/Photos/3.jpeg" className="card-img-top" alt="Toy 3" />
            <div className="card-body text-center">
              <h5 className="card-title">Lego Set</h5>
              <p className="card-text">
                <span className="text-danger fw-bold me-2">$35.00</span>
                <span className="text-muted text-decoration-line-through">$45.00</span>
              </p>
              <button className="btn btn-sm btn-outline-primary w-100">Buy Now</button>
            </div>
          </div>
        </div>

        {/* Product 4 */}
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="card h-100 shadow-sm">
            <img src="/Photos/4.jpeg" className="card-img-top" alt="Toy 4" />
            <div className="card-body text-center">
              <h5 className="card-title">Mini Piano</h5>
              <p className="card-text">
                <span className="text-danger fw-bold me-2">$18.00</span>
                <span className="text-muted text-decoration-line-through">$25.00</span>
              </p>
              <button className="btn btn-sm btn-outline-primary w-100">Buy Now</button>
            </div>
          </div>
        </div>

        {/* Product 5 */}
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="card h-100 shadow-sm">
            <img src="/Photos/5.jpeg" className="card-img-top" alt="Toy 5" />
            <div className="card-body text-center">
              <h5 className="card-title">Puzzle Blocks</h5>
              <p className="card-text">
                <span className="text-danger fw-bold me-2">$12.00</span>
                <span className="text-muted text-decoration-line-through">$16.00</span>
              </p>
              <button className="btn btn-sm btn-outline-primary w-100">Buy Now</button>
            </div>
          </div>
        </div>

        {/* Product 6 */}
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="card h-100 shadow-sm">
            <img src="/Photos/6.jpeg" className="card-img-top" alt="Toy 6" />
            <div className="card-body text-center">
              <h5 className="card-title">Drawing Kit</h5>
              <p className="card-text">
                <span className="text-danger fw-bold me-2">$10.00</span>
                <span className="text-muted text-decoration-line-through">$15.00</span>
              </p>
              <button className="btn btn-sm btn-outline-primary w-100">Buy Now</button>
            </div>
          </div>
        </div>

        {/* Product 1 */}
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="card h-100 shadow-sm">
            <img src="/Photos/7.jpeg" className="card-img-top" alt="Toy 1" />
            <div className="card-body text-center">
              <h5 className="card-title">Teddy Bear</h5>
              <p className="card-text">
                <span className="text-danger fw-bold me-2">$15.00</span>
                <span className="text-muted text-decoration-line-through">$20.00</span>
              </p>
              <button className="btn btn-sm btn-outline-primary w-100">Buy Now</button>
            </div>
          </div>
        </div>

        {/* Product 2 */}
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="card h-100 shadow-sm">
            <img src="/Photos/8.jpeg" className="card-img-top" alt="Toy 2" />
            <div className="card-body text-center">
              <h5 className="card-title">Remote Car</h5>
              <p className="card-text">
                <span className="text-danger fw-bold me-2">$22.00</span>
                <span className="text-muted text-decoration-line-through">$30.00</span>
              </p>
              <button className="btn btn-sm btn-outline-primary w-100">Buy Now</button>
            </div>
          </div>
        </div>

        {/* Product 3 */}
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="card h-100 shadow-sm">
            <img src="/Photos/9.jpeg" className="card-img-top" alt="Toy 3" />
            <div className="card-body text-center">
              <h5 className="card-title">Lego Set</h5>
              <p className="card-text">
                <span className="text-danger fw-bold me-2">$35.00</span>
                <span className="text-muted text-decoration-line-through">$45.00</span>
              </p>
              <button className="btn btn-sm btn-outline-primary w-100">Buy Now</button>
            </div>
          </div>
        </div>

        {/* Product 4 */}
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="card h-100 shadow-sm">
            <img src="/Photos/10.jpeg" className="card-img-top" alt="Toy 4" />
            <div className="card-body text-center">
              <h5 className="card-title">Mini Piano</h5>
              <p className="card-text">
                <span className="text-danger fw-bold me-2">$18.00</span>
                <span className="text-muted text-decoration-line-through">$25.00</span>
              </p>
              <button className="btn btn-sm btn-outline-primary w-100">Buy Now</button>
            </div>
          </div>
        </div>

        {/* Product 5 */}
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="card h-100 shadow-sm">
            <img src="/Photos/11.jpeg" className="card-img-top" alt="Toy 5" />
            <div className="card-body text-center">
              <h5 className="card-title">Puzzle Blocks</h5>
              <p className="card-text">
                <span className="text-danger fw-bold me-2">$12.00</span>
                <span className="text-muted text-decoration-line-through">$16.00</span>
              </p>
              <button className="btn btn-sm btn-outline-primary w-100">Buy Now</button>
            </div>
          </div>
        </div>

        {/* Product 6 */}
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="card h-100 shadow-sm">
            <img src="/Photos/12.jpeg" className="card-img-top" alt="Toy 6" />
            <div className="card-body text-center">
              <h5 className="card-title">Drawing Kit</h5>
              <p className="card-text">
                <span className="text-danger fw-bold me-2">$10.00</span>
                <span className="text-muted text-decoration-line-through">$15.00</span>
              </p>
              <button className="btn btn-sm btn-outline-primary w-100">Buy Now</button>
            </div>
          </div>
        </div>
                {/* Product 1 */}
                <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="card h-100 shadow-sm">
            <img src="/Photos/13.jpeg" className="card-img-top" alt="Toy 1" />
            <div className="card-body text-center">
              <h5 className="card-title">Teddy Bear</h5>
              <p className="card-text">
                <span className="text-danger fw-bold me-2">$15.00</span>
                <span className="text-muted text-decoration-line-through">$20.00</span>
              </p>
              <button className="btn btn-sm btn-outline-primary w-100">Buy Now</button>
            </div>
          </div>
        </div>

        {/* Product 2 */}
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="card h-100 shadow-sm">
            <img src="/Photos/14.jpeg" className="card-img-top" alt="Toy 2" />
            <div className="card-body text-center">
              <h5 className="card-title">Remote Car</h5>
              <p className="card-text">
                <span className="text-danger fw-bold me-2">$22.00</span>
                <span className="text-muted text-decoration-line-through">$30.00</span>
              </p>
              <button className="btn btn-sm btn-outline-primary w-100">Buy Now</button>
            </div>
          </div>
        </div>

        {/* Product 3 */}
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="card h-100 shadow-sm">
            <img src="/Photos/15.jpeg" className="card-img-top" alt="Toy 3" />
            <div className="card-body text-center">
              <h5 className="card-title">Lego Set</h5>
              <p className="card-text">
                <span className="text-danger fw-bold me-2">$35.00</span>
                <span className="text-muted text-decoration-line-through">$45.00</span>
              </p>
              <button className="btn btn-sm btn-outline-primary w-100">Buy Now</button>
            </div>
          </div>
        </div>

        {/* Product 4 */}
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="card h-100 shadow-sm">
            <img src="/Photos/16.jpeg" className="card-img-top" alt="Toy 4" />
            <div className="card-body text-center">
              <h5 className="card-title">Mini Piano</h5>
              <p className="card-text">
                <span className="text-danger fw-bold me-2">$18.00</span>
                <span className="text-muted text-decoration-line-through">$25.00</span>
              </p>
              <button className="btn btn-sm btn-outline-primary w-100">Buy Now</button>
            </div>
          </div>
        </div>

        {/* Product 5 */}
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="card h-100 shadow-sm">
            <img src="/Photos/17.jpeg" className="card-img-top" alt="Toy 5" />
            <div className="card-body text-center">
              <h5 className="card-title">Puzzle Blocks</h5>
              <p className="card-text">
                <span className="text-danger fw-bold me-2">$12.00</span>
                <span className="text-muted text-decoration-line-through">$16.00</span>
              </p>
              <button className="btn btn-sm btn-outline-primary w-100">Buy Now</button>
            </div>
          </div>
        </div>

        {/* Product 6 */}
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="card h-100 shadow-sm">
            <img src="/Photos/18.jpeg" className="card-img-top" alt="Toy 6" />
            <div className="card-body text-center">
              <h5 className="card-title">Drawing Kit</h5>
              <p className="card-text">
                <span className="text-danger fw-bold me-2">$10.00</span>
                <span className="text-muted text-decoration-line-through">$15.00</span>
              </p>
              <button className="btn btn-sm btn-outline-primary w-100">Buy Now</button>
            </div>
          </div>
        </div>
                {/* Product 1 */}
                <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="card h-100 shadow-sm">
            <img src="/Photos/19.jpeg" className="card-img-top" alt="Toy 1" />
            <div className="card-body text-center">
              <h5 className="card-title">Teddy Bear</h5>
              <p className="card-text">
                <span className="text-danger fw-bold me-2">$15.00</span>
                <span className="text-muted text-decoration-line-through">$20.00</span>
              </p>
              <button className="btn btn-sm btn-outline-primary w-100">Buy Now</button>
            </div>
          </div>
        </div>

        {/* Product 2 */}
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="card h-100 shadow-sm">
            <img src="/Photos/20.jpeg" className="card-img-top" alt="Toy 2" />
            <div className="card-body text-center">
              <h5 className="card-title">Remote Car</h5>
              <p className="card-text">
                <span className="text-danger fw-bold me-2">$22.00</span>
                <span className="text-muted text-decoration-line-through">$30.00</span>
              </p>
              <button className="btn btn-sm btn-outline-primary w-100">Buy Now</button>
            </div>
          </div>
        </div>

        {/* Product 3 */}
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="card h-100 shadow-sm">
            <img src="/Photos/21.jpeg" className="card-img-top" alt="Toy 3" />
            <div className="card-body text-center">
              <h5 className="card-title">Lego Set</h5>
              <p className="card-text">
                <span className="text-danger fw-bold me-2">$35.00</span>
                <span className="text-muted text-decoration-line-through">$45.00</span>
              </p>
              <button className="btn btn-sm btn-outline-primary w-100">Buy Now</button>
            </div>
          </div>
        </div>

        {/* Product 4 */}
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="card h-100 shadow-sm">
            <img src="/Photos/22.jpeg" className="card-img-top" alt="Toy 4" />
            <div className="card-body text-center">
              <h5 className="card-title">Mini Piano</h5>
              <p className="card-text">
                <span className="text-danger fw-bold me-2">$18.00</span>
                <span className="text-muted text-decoration-line-through">$25.00</span>
              </p>
              <button className="btn btn-sm btn-outline-primary w-100">Buy Now</button>
            </div>
          </div>
        </div>

        {/* Product 5 */}
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="card h-100 shadow-sm">
            <img src="/Photos/23.jpeg" className="card-img-top" alt="Toy 5" />
            <div className="card-body text-center">
              <h5 className="card-title">Puzzle Blocks</h5>
              <p className="card-text">
                <span className="text-danger fw-bold me-2">$12.00</span>
                <span className="text-muted text-decoration-line-through">$16.00</span>
              </p>
              <button className="btn btn-sm btn-outline-primary w-100">Buy Now</button>
            </div>
          </div>
        </div>

        {/* Product 6 */}
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="card h-100 shadow-sm">
            <img src="/Photos/24.jpeg" className="card-img-top" alt="Toy 6" />
            <div className="card-body text-center">
              <h5 className="card-title">Drawing Kit</h5>
              <p className="card-text">
                <span className="text-danger fw-bold me-2">$10.00</span>
                <span className="text-muted text-decoration-line-through">$15.00</span>
              </p>
              <button className="btn btn-sm btn-outline-primary w-100">Buy Now</button>
            </div>
          </div>
        </div>
                {/* Product 1 */}
                <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="card h-100 shadow-sm">
            <img src="/Photos/25.jpeg" className="card-img-top" alt="Toy 1" />
            <div className="card-body text-center">
              <h5 className="card-title">Teddy Bear</h5>
              <p className="card-text">
                <span className="text-danger fw-bold me-2">$15.00</span>
                <span className="text-muted text-decoration-line-through">$20.00</span>
              </p>
              <button className="btn btn-sm btn-outline-primary w-100">Buy Now</button>
            </div>
          </div>
        </div>

        {/* Product 2 */}
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="card h-100 shadow-sm">
            <img src="/Photos/26.jpeg" className="card-img-top" alt="Toy 2" />
            <div className="card-body text-center">
              <h5 className="card-title">Remote Car</h5>
              <p className="card-text">
                <span className="text-danger fw-bold me-2">$22.00</span>
                <span className="text-muted text-decoration-line-through">$30.00</span>
              </p>
              <button className="btn btn-sm btn-outline-primary w-100">Buy Now</button>
            </div>
          </div>
        </div>

        {/* Product 3 */}
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="card h-100 shadow-sm">
            <img src="/Photos/27.jpeg" className="card-img-top" alt="Toy 3" />
            <div className="card-body text-center">
              <h5 className="card-title">Lego Set</h5>
              <p className="card-text">
                <span className="text-danger fw-bold me-2">$35.00</span>
                <span className="text-muted text-decoration-line-through">$45.00</span>
              </p>
              <button className="btn btn-sm btn-outline-primary w-100">Buy Now</button>
            </div>
          </div>
        </div>

        {/* Product 4 */}
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="card h-100 shadow-sm">
            <img src="/Photos/28.jpeg" className="card-img-top" alt="Toy 4" />
            <div className="card-body text-center">
              <h5 className="card-title">Mini Piano</h5>
              <p className="card-text">
                <span className="text-danger fw-bold me-2">$18.00</span>
                <span className="text-muted text-decoration-line-through">$25.00</span>
              </p>
              <button className="btn btn-sm btn-outline-primary w-100">Buy Now</button>
            </div>
          </div>
        </div>

        {/* Product 5 */}
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="card h-100 shadow-sm">
            <img src="/Photos/29.jpeg" className="card-img-top" alt="Toy 5" />
            <div className="card-body text-center">
              <h5 className="card-title">Puzzle Blocks</h5>
              <p className="card-text">
                <span className="text-danger fw-bold me-2">$12.00</span>
                <span className="text-muted text-decoration-line-through">$16.00</span>
              </p>
              <button className="btn btn-sm btn-outline-primary w-100">Buy Now</button>
            </div>
          </div>
        </div>

        {/* Product 6 */}
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="card h-100 shadow-sm">
            <img src="/Photos/30.jpeg" className="card-img-top" alt="Toy 6" />
            <div className="card-body text-center">
              <h5 className="card-title">Drawing Kit</h5>
              <p className="card-text">
                <span className="text-danger fw-bold me-2">$10.00</span>
                <span className="text-muted text-decoration-line-through">$15.00</span>
              </p>
              <button className="btn btn-sm btn-outline-primary w-100">Buy Now</button>
            </div>
          </div>
        </div>
          {/* Product 5 */}
          <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="card h-100 shadow-sm">
            <img src="/Photos/31.jpeg" className="card-img-top" alt="Toy 5" />
            <div className="card-body text-center">
              <h5 className="card-title">Puzzle Blocks</h5>
              <p className="card-text">
                <span className="text-danger fw-bold me-2">$12.00</span>
                <span className="text-muted text-decoration-line-through">$16.00</span>
              </p>
              <button className="btn btn-sm btn-outline-primary w-100">Buy Now</button>
            </div>
          </div>
        </div>

        {/* Product 6 */}
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="card h-100 shadow-sm">
            <img src="/Photos/32.jpeg" className="card-img-top" alt="Toy 6" />
            <div className="card-body text-center">
              <h5 className="card-title">Drawing Kit</h5>
              <p className="card-text">
                <span className="text-danger fw-bold me-2">$10.00</span>
                <span className="text-muted text-decoration-line-through">$15.00</span>
              </p>
              <button className="btn btn-sm btn-outline-primary w-100">Buy Now</button>
            </div>
          </div>
        </div>
         {/* Product 6 */}
         <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="card h-100 shadow-sm">
            <img src="/Photos/33.jpeg" className="card-img-top" alt="Toy 6" />
            <div className="card-body text-center">
              <h5 className="card-title">Drawing Kit</h5>
              <p className="card-text">
                <span className="text-danger fw-bold me-2">$10.00</span>
                <span className="text-muted text-decoration-line-through">$15.00</span>
              </p>
              <button className="btn btn-sm btn-outline-primary w-100">Buy Now</button>
            </div>
          </div>
        </div>
         {/* Product 6 */}
         <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="card h-100 shadow-sm">
            <img src="/Photos/34.jpeg" className="card-img-top" alt="Toy 6" />
            <div className="card-body text-center">
              <h5 className="card-title">Drawing Kit</h5>
              <p className="card-text">
                <span className="text-danger fw-bold me-2">$10.00</span>
                <span className="text-muted text-decoration-line-through">$15.00</span>
              </p>
              <button className="btn btn-sm btn-outline-primary w-100">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
