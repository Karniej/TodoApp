import React from 'react'
import FilterLink from '../containers/FilterLink'

const Footer = () => (
  <section className="footer">
    <FilterLink filter="SHOW_ALL">
      All
    </FilterLink>
    <FilterLink filter="SHOW_ACTIVE">
      Active
    </FilterLink>
    <FilterLink filter="SHOW_COMPLETED">
      Completed
    </FilterLink>
  </section>
)

export default Footer