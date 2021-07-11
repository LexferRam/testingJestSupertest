const supertest = require('supertest');
const {app,server} = require('../src/app');

const api = supertest(app);

const initialPosts = [
    {
        "userId": 10,
        "id": 99,
        "title": "temporibus sit alias delectus eligendi possimus magni",
        "body": "quo deleniti praesentium dicta non quod\naut est molestias\nmolestias et officia quis nihil\nitaque dolorem quia"
      },
      {
        "userId": 10,
        "id": 100,
        "title": "at nam consequatur ea labore ea harum",
        "body": "cupiditate quo est a modi nesciunt soluta\nipsa voluptas error itaque dicta in\nautem qui minus magnam et distinctio eum\naccusamus ratione error aut"
      }
]

// beforeEach(async() => {
    
// })

test('posts are returned as json',async () =>{
    await api
        .get('/posts')
        .expect(200)
        .expect('Content-Type', /application\/json/)
});

test('there are notes in the json response',async () =>{
    const response = await api.get('/posts')
    expect(response.body).toHaveLength(100)
        // .expect('Content-Type', /application\/json/)
});

test("the title of the first post is sunt aut facere repellat provident occaecati excepturi optio reprehenderit",async () =>{
    const response = await api.get('/posts');

    const titles = response.body.map(post => post.title)

    expect(titles).toContain("sunt aut facere repellat provident occaecati excepturi optio reprehenderit")
        // .expect('Content-Type', /application\/json/)
});

test('search a specific user',async () =>{
    const userId = 1
    const response = await api.get(`/posts/${userId}`)
    
        .expect('Content-Type', /application\/json/)
    /*
    ********************************
    si se quiere hacer un test enviando un json
    se debe usar el metodo .send() en donde se le deba passar 
    un json,
    Para verificar que se hizo la insercion desde el test se debe consultar la BDs para ver si contiene un obj con la información que se acaba de insertar 
    */
});

afterAll(() => {
    server.close()//cierra el server despues de terminar los testing
})