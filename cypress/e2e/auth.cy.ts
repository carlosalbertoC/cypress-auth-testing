describe("Autenticación", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000");
    });
  
    it("Debe permitir el inicio de sesión con credenciales válidas", () => {
      cy.get("input[type='email']").type("test@example.com");
      cy.get("input[type='password']").type("password123");
      cy.get("button").contains("Iniciar sesión").click();
      cy.contains("Bienvenido, test@example.com").should("be.visible");
    });
  
    it("Debe mostrar un error con credenciales incorrectas", () => {
      cy.get("input[type='email']").type("fake@example.com");
      cy.get("input[type='password']").type("wrongpassword");
      cy.get("button").contains("Iniciar sesión").click();
      cy.contains("Credenciales incorrectas").should("be.visible");
    });
  
    it("Debe permitir cerrar sesión", () => {
      cy.get("input[type='email']").type("test@example.com");
      cy.get("input[type='password']").type("password123");
      cy.get("button").contains("Iniciar sesión").click();
      cy.get("button").contains("Cerrar sesión").click();
      cy.contains("Iniciar sesión").should("be.visible");
    });
  });
  