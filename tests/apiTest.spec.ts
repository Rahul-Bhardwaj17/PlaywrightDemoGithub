import { test, expect, request } from "../Utility/index";

test.use({ baseURL: "https://postman-echo.com" })
test("api test", async () => {
    const context = await request.newContext();
    const response = await context.get("https://postman-echo.com/get");
    console.log(await response.json());
    await context.dispose();
})

test("api test Get", async ({ request }) => {
    const response = await request.get("https://postman-echo.com/get");
    const json = await response.json();
    console.log(json);
    expect(response.status()).toBe(200);
    expect(json.args).toEqual({});
    expect(json.headers.host).toBe("postman-echo.com");
})

test("api test post", async ({ request }) => {
    const response = await request.delete("/delete", {
        data: {
            name: "Gaurav",
        }, maxRedirects: 1,
        timeout: 10000,
        headers: {
            "Content-Type": "application/json",
            "Authorization": 'Basic' + Buffer.from('username:password').toString('base64')
        }
    });
    const json = await response.json();
    console.log(json);
    expect(response.status()).toBe(200);
    expect(json.args).toEqual({});
    expect(json.headers.host).toBe("postman-echo.com");
})