import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const { format } = new Intl.NumberFormat('pt-BR',
  { maximumFractionDigits: 2, minimumFractionDigits: 2 });

const Header = ({ email, totalExpenses }) => (
  <header>
    <h1>Logo</h1>
    <span className="email-input" data-testid="email-field">
      Email:
      {email}
    </span>
    <span>
      Despesas Totais: R$
      <span data-testid="total-field">
        { totalExpenses ? format(totalExpenses) : 0 }
      </span>
      <span data-testid="header-currency-field">BRL</span>
    </span>
  </header>
);

const mapStateToProps = (state) => ({
  email: state.user.email,
  totalExpenses: state.wallet.totalExpenses,
});

export default connect(mapStateToProps)(Header);

Header.propTypes = {
  email: PropTypes.string.isRequired,
  totalExpenses: PropTypes.number.isRequired,
};
