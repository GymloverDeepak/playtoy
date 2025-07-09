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
            <img src="https://via.placeholder.com/300x200?text=Toy+1" className="card-img-top" alt="Toy 1" />
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
            <img src="https://via.placeholder.com/300x200?text=Toy+2" className="card-img-top" alt="Toy 2" />
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
            <img src="https://via.placeholder.com/300x200?text=Toy+3" className="card-img-top" alt="Toy 3" />
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
            <img src="https://via.placeholder.com/300x200?text=Toy+4" className="card-img-top" alt="Toy 4" />
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
            <img src="https://via.placeholder.com/300x200?text=Toy+5" className="card-img-top" alt="Toy 5" />
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
            <img src="https://via.placeholder.com/300x200?text=Toy+6" className="card-img-top" alt="Toy 6" />
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
            <img src="https://via.placeholder.com/300x200?text=Toy+1" className="card-img-top" alt="Toy 1" />
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
            <img src="https://via.placeholder.com/300x200?text=Toy+2" className="card-img-top" alt="Toy 2" />
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
            <img src="https://via.placeholder.com/300x200?text=Toy+3" className="card-img-top" alt="Toy 3" />
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
            <img src="https://via.placeholder.com/300x200?text=Toy+4" className="card-img-top" alt="Toy 4" />
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
            <img src="https://via.placeholder.com/300x200?text=Toy+5" className="card-img-top" alt="Toy 5" />
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
            <img src="https://via.placeholder.com/300x200?text=Toy+6" className="card-img-top" alt="Toy 6" />
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
            <img src="https://via.placeholder.com/300x200?text=Toy+1" className="card-img-top" alt="Toy 1" />
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
            <img src="https://via.placeholder.com/300x200?text=Toy+2" className="card-img-top" alt="Toy 2" />
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
            <img src="https://via.placeholder.com/300x200?text=Toy+3" className="card-img-top" alt="Toy 3" />
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
            <img src="https://via.placeholder.com/300x200?text=Toy+4" className="card-img-top" alt="Toy 4" />
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
            <img src="https://via.placeholder.com/300x200?text=Toy+5" className="card-img-top" alt="Toy 5" />
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
            <img src="https://via.placeholder.com/300x200?text=Toy+6" className="card-img-top" alt="Toy 6" />
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
            <img src="https://via.placeholder.com/300x200?text=Toy+1" className="card-img-top" alt="Toy 1" />
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
            <img src="https://via.placeholder.com/300x200?text=Toy+2" className="card-img-top" alt="Toy 2" />
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
            <img src="https://via.placeholder.com/300x200?text=Toy+3" className="card-img-top" alt="Toy 3" />
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
            <img src="https://via.placeholder.com/300x200?text=Toy+4" className="card-img-top" alt="Toy 4" />
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
            <img src="https://via.placeholder.com/300x200?text=Toy+5" className="card-img-top" alt="Toy 5" />
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
            <img src="https://via.placeholder.com/300x200?text=Toy+6" className="card-img-top" alt="Toy 6" />
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
            <img src="https://via.placeholder.com/300x200?text=Toy+1" className="card-img-top" alt="Toy 1" />
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
            <img src="https://via.placeholder.com/300x200?text=Toy+2" className="card-img-top" alt="Toy 2" />
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
            <img src="https://via.placeholder.com/300x200?text=Toy+3" className="card-img-top" alt="Toy 3" />
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
            <img src="https://via.placeholder.com/300x200?text=Toy+4" className="card-img-top" alt="Toy 4" />
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
            <img src="https://via.placeholder.com/300x200?text=Toy+5" className="card-img-top" alt="Toy 5" />
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
            <img src="https://via.placeholder.com/300x200?text=Toy+6" className="card-img-top" alt="Toy 6" />
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
            <img src="https://via.placeholder.com/300x200?text=Toy+5" className="card-img-top" alt="Toy 5" />
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
            <img src="https://via.placeholder.com/300x200?text=Toy+6" className="card-img-top" alt="Toy 6" />
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
