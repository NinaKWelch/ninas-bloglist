/* eslint-disable no-undef */
/* eslint-disable func-names */
describe('Blog app', function() {
  beforeEach(function() {
    cy.visit('http://localhost:3000')
  })

  it('front page shows login', function() {
    cy.contains('Sign In to Bloglist')
  })

  it('user can login', function() {
    cy.get('input:first').type('test')
    cy.get('input:last').type('testpw')
    cy.get('[data-cy=submit]').click()
    // cy.wait(6000)
    cy.contains('Blogs App')
  })
})
