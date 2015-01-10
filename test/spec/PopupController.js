describe("PopupController", function () {
  it("should create 'repos' with more than one repository", function () {
    var scope = {},
      ctrl = new PopupController(scope);

    expect(scope.repos.length).tobe(19);

  });
});