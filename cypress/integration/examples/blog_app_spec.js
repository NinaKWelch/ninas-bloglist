/* eslint-disable no-undef */
/* eslint-disable func-names */
describe('Blog app', function() {
  beforeEach(function() {
    cy.request('POST', 'http://localhost:3003/api/tests/reset')
    const user = {
      username: 'test',
      name: 'Tester',
      password: 'testpw'
    }
    cy.request('POST', 'http://localhost:3003/api/users/', user)
    cy.visit('http://localhost:3000')
  })

  it('front page shows login', function() {
    cy.contains('Sign In to Bloglist')
  })

  describe('when logged in', function() {
    beforeEach(function() {
      cy.get('input:first').type('test')
      cy.get('input:last').type('testpw')
      cy.get('[data-cy=submit]').click()
      // cy.wait(6000)
      cy.contains('Blogs App')
    })

    it('a new blog can be created', function() {
      cy.contains('Add New Blog').click()
      // cy.wait(6000)
      cy.get('[data-cy=title]').type('test blog title')
      cy.get('[data-cy=author]').type('test blog author')
      cy.get('[data-cy=url]').type('hhtp://testblog.com')
      cy.get('[data-cy=create]').click()
      cy.contains('test blog title')
    })
  })
})
