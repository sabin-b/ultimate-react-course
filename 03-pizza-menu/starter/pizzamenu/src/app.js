import React from 'react';
import { pizzaData } from './data';
import './index.css';

export function App() {
  return (
    <div className='container'>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  // * inline styling
  // let headingStyle = { color: 'blue', fontSize: '45px' };
  // return <h1 style={headingStyle}>Pizza Menu Co.</h1>;
  return (
    <header className='header'>
      <h1>Pizza Menu Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  let pizzaDataLength = pizzas.length;
  // console.log(pizzaDataLength);
  return (
    <div className='menu'>
      <h2>Our Menu</h2>

      {/* conditional rendering with ternary operator */}

      {pizzaDataLength > 0 ? (
        // * react fragment use case
        <>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
          <ul className='pizzas'>
            {pizzas.map(pizza => (
              <Pizza pizza={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>we don't have stock now !</p>
      )}

      {/* conditional rendering with shortcircuiting */}
      {/* {pizzaDataLength > 0 && (
        <ul className='pizzas'>
          {pizzas.map(pizza => (
            <Pizza pizza={pizza} key={pizza.name} />
          ))}
        </ul>
      )} */}

      {/* old one */}
      {/* <Pizza
        name='Focaccia'
        ingredients='Bread with italian olive oil and rosemary'
        price={6}
        photoName='pizzas/margherita.jpg'
        soldOut='true'
      />
      <Pizza
        name='Focaccia'
        ingredients='Bread with italian olive oil and rosemary'
        price={6}
        photoName='pizzas/margherita.jpg'
        soldOut='true'
      /> */}
    </div>
  );
}
// * pizza component
function Pizza(props) {
  //! getting value
  const pizzaData = props.pizza;

  // * simply return null
  // if (pizzaData.soldOut) return null;
  return (
    <li className={`pizza ${pizzaData.soldOut ? 'sold-out' : ''} `}>
      <img src={pizzaData.photoName} alt={pizzaData.name} />
      <div>
        <h3>{pizzaData.name}</h3>
        <p>{pizzaData.ingredients}</p>
        <span>{pizzaData.soldOut ? 'soldOut' : `$${pizzaData.price + 3}`}</span>
      </div>
    </li>
  );
}

function Footer() {
  let currentTime = new Date().getHours();
  let openTime = 11;
  let closeTime = 23;
  let isOpen = currentTime >= openTime && currentTime <= closeTime;
  let updateStatus = isOpen ? "we're currently open" : "we're closed";

  if (isOpen) {
    return (
      <footer className='footer'>
        <div className='order'>
          <p>
            {new Date().toLocaleTimeString()},{updateStatus}
          </p>
          <button className='btn'>order</button>
        </div>
      </footer>
    );
  } else {
    return (
      <footer className='footer'>
        <div className='order'>
          <p>
            {new Date().toLocaleTimeString()},{updateStatus}
          </p>
          <button className='btn'>Book Your Order</button>
        </div>
      </footer>
    );
  }

  // return React.createElement("footer", null, <div>footer</div>);
}
