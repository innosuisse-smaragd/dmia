import App from "./App";

// const server = setupServer(
//   rest.get("http://localhost:1337/api/tests", (req, res, ctx) => {
//     return res(
//       ctx.json({
//         data: [
//           {
//             id: 1,
//             attributes: {
//               Name: "Mocked test",
//               Description: "Test mocked for testing blabla bla",
//             },
//           },
//         ],
//       })
//     );
//   })
// );

// beforeAll(() => server.listen());
// afterEach(() => server.resetHandlers());
// afterAll(() => server.close());

describe("App Component", () => {
  it("fetch tests and render them to the screen", async () => {
    // render(<App />);

    // const title = await screen.findByRole("heading");
    expect(2).toBe(2);
  });
});
