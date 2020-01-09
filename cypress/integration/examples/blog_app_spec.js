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

  it('wrong login credentials show an error', function() {
    cy.get('input:first').type('name')
    cy.get('input:last').type('pw')
    cy.get('[data-cy=submit]').click()
    cy.contains('Check username and password')
  })

  describe('when logged in', function() {
    beforeEach(function() {
      cy.get('input:first').type('test')
      cy.get('input:last').type('testpw')
      cy.get('[data-cy=submit]').click()
      cy.contains('Blogs App')
    })

    it('a new blog can be created', function() {
      cy.contains('Add New Blog').click()
      cy.get('[data-cy=title]').type('test blog title')
      cy.get('[data-cy=author]').type('test blog author')
      cy.get('[data-cy=url]').type('http://testblog.com')
      cy.get('[data-cy=create]').click()
      cy.contains('test blog title')
    })

    describe('errors in blog creation', function() {
      beforeEach(function() {
        cy.contains('Add New Blog').click()
        cy.get('[data-cy=title]').type('new blog')
        cy.get('[data-cy=author]').type('blog author')
        cy.get('[data-cy=url]').type('http://duplicate.com')
        cy.get('[data-cy=create]').click()
        cy.get('[data-cy=cancel]').click()
      })

      it('duplicate blog url shows an error', function() {
        cy.contains('Add New Blog').click()
        cy.get('[data-cy=title]').type('another new blog')
        cy.get('[data-cy=author]').type('another author')
        cy.get('[data-cy=url]').type('http://duplicate.com')
        cy.get('[data-cy=create]').click()
        cy.contains('This blog already exists')
      })

      it('short title shows an error', function() {
        cy.contains('Add New Blog').click()
        cy.get('[data-cy=title]').type('new')
        cy.get('[data-cy=author]').type('some author')
        cy.get('[data-cy=url]').type('http://testblog2.com')
        cy.get('[data-cy=create]').click()
        cy.contains('Title or author name too short')
      })

      it('short author name shows an error', function() {
        cy.contains('Add New Blog').click()
        cy.get('[data-cy=title]').type('some new blog')
        cy.get('[data-cy=author]').type('a')
        cy.get('[data-cy=url]').type('http://testblog3.com')
        cy.get('[data-cy=create]').click()
        cy.contains('Title or author name too short')
      })
    })
  })
})
