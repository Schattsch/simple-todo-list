describe('Todo List Website', () => {
  beforeEach(() => {
    cy.visit('https://schattschneiderkarel.ikt.khk.ee/testimine/') // Change this to your website URL
  })

  it('should add a task', () => {
    const taskName = 'Buy groceries'

    cy.get('#newtask input')
      .type(taskName)

    cy.get('#push')
      .click()

    cy.get('.task')
      .should('have.length', 1)

cy.get('#taskname')
  .invoke('text')
  .then((text) => {
    expect(text).to.match(/^\s*Buy groceries\s*$/)
  })

  })

  it('should delete a task', () => {
    cy.get('#newtask input')
      .type('Clean the house')

    cy.get('#push')
      .click()

    cy.get('.task')
      .should('have.length', 1)

    cy.get('.delete')
      .click()

    cy.get('.task')
      .should('have.length', 0)
  })

  it('should show an alert if no task name is entered', () => {
    cy.get('#push')
      .click()

    cy.on('window:alert', (str) => {
      expect(str).to.equal('Kindly Enter Task Name!!!!')
    })
  })
})
