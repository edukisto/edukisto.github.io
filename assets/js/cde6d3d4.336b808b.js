"use strict";(self.webpackChunk_edukisto_tlm=self.webpackChunk_edukisto_tlm||[]).push([[4612],{9186:function(n,e,t){t.r(e),t.d(e,{assets:function(){return b},contentTitle:function(){return g},default:function(){return P},frontMatter:function(){return j},metadata:function(){return m},toc:function(){return f}});var r=t(5893),s=t(1151),i="<?php\n\n// highlight-start\nuse App\\Http\\Controllers\\ProductController;\n// highlight-end\nuse Illuminate\\Http\\Request;\nuse Illuminate\\Support\\Facades\\Route;\n\n/*\n|--------------------------------------------------------------------------\n| API Routes\n|--------------------------------------------------------------------------\n|\n| Here is where you can register API routes for your application. These\n| routes are loaded by the RouteServiceProvider and all of them will\n| be assigned to the \"api\" middleware group. Make something great!\n|\n*/\n\nRoute::middleware('auth:sanctum')->get('/user', function (Request $request) {\n    return $request->user();\n});\n\n// highlight-start\nRoute::resource('products', ProductController::class);\n// highlight-end\n",l=t(7416),c="<?php\n\nuse Illuminate\\Database\\Migrations\\Migration;\nuse Illuminate\\Database\\Schema\\Blueprint;\nuse Illuminate\\Support\\Facades\\Schema;\n\nreturn new class extends Migration\n{\n    /**\n     * Run the migrations.\n     */\n    public function up(): void\n    {\n        Schema::create('products', function (Blueprint $table) {\n            $table->id();\n            // highlight-start\n            $table->string('name', 55)->collation('utf8mb4_0900_ai_ci')->unique();\n            $table->decimal('price', 8, 2, true)->index();\n            // highlight-end\n            $table->timestamps();\n        });\n    }\n\n    /**\n     * Reverse the migrations.\n     */\n    public function down(): void\n    {\n        Schema::dropIfExists('products');\n    }\n};\n",d='<!DOCTYPE html>\n<html lang="ru-luna1918">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport"\n        content="width=device-width, initial-scale=1.0">\n  <title>\u041c\u0430\u0433\u0430\u0437\u0438\u043d</title>\n  \x3c!-- \u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0430\u0435\u043c \u0444\u0430\u0439\u043b \u0441\u043e \u0441\u0446\u0435\u043d\u0430\u0440\u0438\u0435\u043c JavaScript. --\x3e\n  <script defer\n          src="main.js"\n          type="module"><\/script>\n</head>\n<body>\n  <article>\n    <h1>\u0422\u043e\u0432\u0430\u0440\u044b</h1>\n    <section>\n      <h2>\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0437\u0430\u043f\u0438\u0441\u0438</h2>\n\n      \x3c!-- \u0424\u043e\u0440\u043c\u0430 \u0434\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u0437\u0430\u043f\u0438\u0441\u0438 \u043e\xa0\u0442\u043e\u0432\u0430\u0440\u0435. --\x3e\n      \x3c!-- \u0417\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u043e\u0432 name \u0440\u0430\u0432\u043d\u044b \u0438\u043c\u0435\u043d\u0430\u043c \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u0432 \u0432\xa0\u0442\u0430\u0431\u043b\u0438\u0446\u0435 \u0411\u0414. --\x3e\n      <form action="http://127.0.0.1:8000/api/products/"\n            method="post">\n        <label>\n          \u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435:\n          <input id="name"\n                 name="name"\n                 required\n                 value="\u041c\u043e\u043b\u043e\u043a\u043e">\n        </label>\n        <label>\n          \u0426\u0435\u043d\u0430:\n          <input id="price"\n                 min="0.01"\n                 name="price"\n                 required\n                 step="0.01"\n                 type="number"\n                 value="89.99">\n        </label>\n\n        \x3c!-- \u0414\u043b\u044f\xa0\u0443\u0434\u043e\u0431\u0441\u0442\u0432\u0430 \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u0438\u0437 JavaScript \u0434\u0430\u0451\u043c \u043a\u043d\u043e\u043f\u043a\u0435 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440. --\x3e\n        <button id="store"\n                type="submit">\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c</button>\n      </form>\n    </section>\n    <section>\n      <h2>\u0412\u0438\u0442\u0440\u0438\u043d\u0430</h2>\n      \x3c!-- \u0414\u043b\u044f\xa0\u0443\u0434\u043e\u0431\u0441\u0442\u0432\u0430 \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u0438\u0437 JavaScript \u0434\u0430\u0451\u043c \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0443 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440. --\x3e\n      <div id="product-list"></div>\n    </section>\n  </article>\n</body>\n\n</html>\n',a="import { ProductController } from './product-controller.js';\n\nwindow.addEventListener('load', () => {\n  const controller = new ProductController();\n\n  const button = document.getElementById('store');\n  button.addEventListener('click', controller.store);\n\n  controller.getAll();\n});\n",h="<?php\n\nnamespace App\\Models;\n\nuse Illuminate\\Database\\Eloquent\\Factories\\HasFactory;\nuse Illuminate\\Database\\Eloquent\\Model;\n\nclass Product extends Model\n{\n    use HasFactory;\n\n    // highlight-start\n    protected $fillable = [\n        'name',\n        'price',\n    ];\n    // highlight-end\n}\n",o="class ProductController {\n  async destroy(uri) {\n    // \u041f\u043e\u0434\u0430\u0451\u043c HTTP-\u0437\u0430\u043f\u0440\u043e\u0441.\n    const response = await fetch(uri, { method: 'DELETE' });\n    if (response.ok) {\n      alert('\u0417\u0430\u043f\u0438\u0441\u044c \u0443\u0434\u0430\u043b\u0435\u043d\u0430');\n    } else {\n      alert('\u041e\u0448\u0438\u0431\u043a\u0430!');\n    }\n  }\n\n  async getAll() {\n    // URL \u0440\u0435\u0441\u0443\u0440\u0441\u0430 API, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0435\u0442 \u0437\u0430\u043f\u0440\u043e\u0441\u044b \u043d\u0430 \u0432\u044b\u0431\u043e\u0440\u043a\u0443 \u0432\u0441\u0435\u0445 \u0437\u0430\u043f\u0438\u0441\u0435\u0439 \u0438\u0437 \u0411\u0414.\n    const uri = 'http://127.0.0.1:8000/api/products/';\n    // \u041f\u043e\u0434\u0430\u0451\u043c HTTP-\u0437\u0430\u043f\u0440\u043e\u0441.\n    const getResponse = await fetch(uri, { method: 'GET' });\n    // \u041f\u0430\u0440\u0441\u0438\u043c JSON, \u043f\u0440\u0438\u0448\u0435\u0434\u0448\u0438\u0439 \u0432 \u0442\u0435\u043b\u0435 \u043e\u0442\u0432\u0435\u0442\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430.\n    const products = await getResponse.json();\n\n    // \u0421\u043e\u0437\u0434\u0430\u0451\u043c \u043f\u0443\u0441\u0442\u043e\u0439 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440 \u0434\u043b\u044f \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432 HTML.\n    const articles = document.createDocumentFragment();\n\n    // \u041f\u0435\u0440\u0435\u0431\u0438\u0440\u0430\u0435\u043c \u0437\u0430\u043f\u0438\u0441\u0438 \u043e \u0442\u043e\u0432\u0430\u0440\u0430\u0445.\n    for (const product of products.data) {\n      // \u0421\u043e\u0437\u0434\u0430\u0451\u043c \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440 \u0442\u043e\u0432\u0430\u0440\u0430.\n      const article = document.createElement('article');\n\n      // \u0421\u043e\u0437\u0434\u0430\u0451\u043c \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a.\n      const h1 = document.createElement('h1');\n\n      // \u0421\u043e\u0437\u0434\u0430\u0451\u043c \u043a\u043d\u043e\u043f\u043a\u0443.\n      const button = document.createElement('button');\n      button.textContent = '\u0423\u0434\u0430\u043b\u0438\u0442\u044c';\n      // \u041e\u0431\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a \u0449\u0435\u043b\u0447\u043a\u0430 \u043c\u044b\u0448\u0438 \u043f\u043e \u043a\u043d\u043e\u043f\u043a\u0435.\n      button.addEventListener('click', () => {\n        this.destroy(`http://127.0.0.1:8000/api/products/${product.id}`);\n      });\n\n      h1.textContent = product.name;\n      article.appendChild(h1);\n      article.appendChild(button);\n      articles.appendChild(article);\n    }\n    const container = document.getElementById('product-list');\n    container.appendChild(articles);\n  }\n\n  async store(event) {\n    // \u041e\u0442\u043c\u0435\u043d\u0430 \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u043e\u0433\u043e \u043f\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u043a\u043d\u043e\u043f\u043a\u0438 (\u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0430 \u0444\u043e\u0440\u043c\u044b \u0441 \u043f\u0435\u0440\u0435\u0445\u043e\u0434\u043e\u043c).\n    event.preventDefault();\n\n    // \u041a\u043e\u043f\u0438\u0440\u0443\u0435\u043c \u0434\u0430\u043d\u043d\u044b\u0435 \u0438\u0437 \u0444\u043e\u0440\u043c\u044b \u0432 \u043e\u0431\u044a\u0435\u043a\u0442. \u0418\u043c\u0435\u043d\u0430 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0442 \u0441\u0442\u043e\u043b\u0431\u0446\u0430\u043c \u0432 \u0411\u0414.\n    const data = {\n      'name': document.getElementById('name').value,\n      'price': document.getElementById('price').value,\n    };\n\n    // console.log(JSON.stringify(data));\n\n    // URL \u0440\u0435\u0441\u0443\u0440\u0441\u0430 API, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0435\u0442 \u0437\u0430\u043f\u0440\u043e\u0441\u044b \u043d\u0430 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0437\u0430\u043f\u0438\u0441\u0435\u0439 \u0432 \u0411\u0414.\n    const url = 'http://127.0.0.1:8000/api/products/';\n\n    // \u041f\u043e\u0434\u0430\u0451\u043c HTTP-\u0437\u0430\u043f\u0440\u043e\u0441.\n    const response = await fetch(url, {\n      // \u041a\u043e\u0434\u0438\u0440\u0443\u0435\u043c \u0432 JSON \u0434\u0430\u043d\u043d\u044b\u0435, \u0432\u0437\u044f\u0442\u044b\u0435 \u0438\u0437 \u0444\u043e\u0440\u043c\u044b.\n      body: JSON.stringify(data),\n      headers: {\n        // \u0421\u043e\u043e\u0431\u0449\u0430\u0435\u043c \u0441\u0435\u0440\u0432\u0435\u0440\u0443, \u0447\u0442\u043e \u043e\u0436\u0438\u0434\u0430\u0435\u043c \u043e\u0442\u0432\u0435\u0442 \u0432 \u0444\u043e\u0440\u043c\u0430\u0442\u0435 JSON.\n        'Accept': 'application/vnd.api+json',\n        // \u0421\u043e\u043e\u0431\u0449\u0430\u0435\u043c \u0441\u0435\u0440\u0432\u0435\u0440\u0443, \u0447\u0442\u043e \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u043c \u0435\u043c\u0443 \u0434\u0430\u043d\u043d\u044b\u0435 \u0432 \u0444\u043e\u0440\u043c\u0430\u0442\u0435 JSON.\n        'Content-Type': 'application/vnd.api+json',\n      },\n      method: 'POST',\n    });\n\n    // console.log(response.headers.forEach(console.log));\n\n    if (response.ok) {\n      alert('\u0417\u0430\u043f\u0438\u0441\u044c \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0430');\n    } else {\n      alert('\u041e\u0448\u0438\u0431\u043a\u0430!');\n    }\n  }\n}\n\nexport {\n  ProductController,\n};\n",p="<?php\n\nnamespace App\\Http\\Controllers;\n\nuse App\\Http\\Requests\\StoreProductRequest;\nuse App\\Http\\Requests\\UpdateProductRequest;\n// highlight-start\nuse App\\Http\\Resources\\ProductCollection;\nuse App\\Http\\Resources\\ProductResource;\n// highlight-end\nuse App\\Models\\Product;\n\nclass ProductController extends Controller\n{\n    /**\n     * Display a listing of the resource.\n     */\n    public function index()\n    {\n        // highlight-start\n        $products = Product::all();\n        // $products = Product::paginate(1);\n        return new ProductCollection($products);\n        // highlight-end\n    }\n\n    /**\n     * Store a newly created resource in storage.\n     */\n    public function store(StoreProductRequest $request)\n    {\n        // highlight-start\n        $data = $request->validated();\n        $product = Product::create($data);\n        return response()->noContent(201)->withHeaders([\n            'Location' => route('products.show', $product->id),\n        ]);\n        // highlight-end\n    }\n\n    /**\n     * Display the specified resource.\n     */\n    public function show(Product $product)\n    {\n        // highlight-start\n        return new ProductResource($product);\n        // highlight-end\n    }\n\n    /**\n     * Update the specified resource in storage.\n     */\n    public function update(UpdateProductRequest $request, Product $product)\n    {\n        // highlight-start\n        $data = $request->validated();\n        $product = $product->update($data);\n        return response()->noContent(204);\n        // highlight-end\n    }\n\n    /**\n     * Remove the specified resource from storage.\n     */\n    public function destroy(Product $product)\n    {\n        // highlight-start\n        $product->delete();\n        return response()->noContent(204);\n        // highlight-end\n    }\n}\n",u="<?php\n\nnamespace App\\Http\\Requests;\n\nuse Illuminate\\Foundation\\Http\\FormRequest;\n\nclass StoreProductRequest extends FormRequest\n{\n    /**\n     * Determine if the user is authorized to make this request.\n     */\n    public function authorize(): bool\n    {\n        // highlight-start\n        return true;\n        // highlight-end\n    }\n\n    /**\n     * Get the validation rules that apply to the request.\n     *\n     * @return array<string, \\Illuminate\\Contracts\\Validation\\ValidationRule|array<mixed>|string>\n     */\n    public function rules(): array\n    {\n        return [\n            // highlight-start\n            'name' => [\n                'max:55',\n                'required',\n                'string',\n                'unique:products,name',\n            ],\n            'price' => [\n                'decimal:0,2',\n                'max:999999.99',\n                'min:0',\n                'required',\n            ],\n            // highlight-end\n        ];\n    }\n}\n",x="<?php\n\nnamespace App\\Http\\Requests;\n\nuse Illuminate\\Foundation\\Http\\FormRequest;\n\nclass UpdateProductRequest extends FormRequest\n{\n    /**\n     * Determine if the user is authorized to make this request.\n     */\n    public function authorize(): bool\n    {\n        // highlight-start\n        return true;\n        // highlight-end\n    }\n\n    /**\n     * Get the validation rules that apply to the request.\n     *\n     * @return array<string, \\Illuminate\\Contracts\\Validation\\ValidationRule|array<mixed>|string>\n     */\n    public function rules(): array\n    {\n        return [\n            // highlight-start\n            'name' => [\n                'max:55',\n                'string',\n                'unique:products,name',\n            ],\n            'price' => [\n                'decimal:0,2',\n                'max:999999.99',\n                'min:0',\n            ],\n            // highlight-end\n        ];\n    }\n}\n";const j={},g="\u041f\u0440\u0438\u043c\u0435\u0440 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0437\u0430\u0434\u0430\u043d\u0438\u044f",m={id:"webdev/01/example",title:"\u041f\u0440\u0438\u043c\u0435\u0440 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0437\u0430\u0434\u0430\u043d\u0438\u044f",description:"\u041f\u0440\u043e\u0435\u043a\u0442 \u043d\u0430 Laravel",source:"@site/docs/webdev/01/example.mdx",sourceDirName:"webdev/01",slug:"/webdev/01/example",permalink:"/webdev/01/example",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"mySidebar",previous:{title:"\u0417\u0430\u0434\u0430\u043d\u0438\u0435",permalink:"/webdev/01/task"},next:{title:"\u0420\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u0432\u0435\u0431\xad\u2011\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u043d\u0430 React",permalink:"/webdev/02/"}},b={},f=[{value:"\u041f\u0440\u043e\u0435\u043a\u0442 \u043d\u0430 <i>Laravel</i>",id:"\u043f\u0440\u043e\u0435\u043a\u0442-\u043d\u0430-laravel",level:2},{value:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 <i>API</i>",id:"\u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0430-api",level:2},{value:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0439 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441",id:"\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0439-\u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441",level:2}];function v(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"\u043f\u0440\u0438\u043c\u0435\u0440-\u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f-\u0437\u0430\u0434\u0430\u043d\u0438\u044f",children:"\u041f\u0440\u0438\u043c\u0435\u0440 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0437\u0430\u0434\u0430\u043d\u0438\u044f"}),"\n",(0,r.jsxs)(e.h2,{id:"\u043f\u0440\u043e\u0435\u043a\u0442-\u043d\u0430-laravel",children:["\u041f\u0440\u043e\u0435\u043a\u0442 \u043d\u0430 ",(0,r.jsx)("i",{lang:"en",children:"Laravel"})]}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u041e\u0442\u043a\u0440\u043e\u0435\u043c \u044d\u043c\u0443\u043b\u044f\u0442\u043e\u0440 \u043a\u043e\u043d\u0441\u043e\u043b\u0438."}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["\u041f\u0435\u0440\u0435\u0439\u0434\u0451\u043c \u0432\xa0\u043a\u0430\u0442\u0430\u043b\u043e\u0433 \u0432\u0435\u0431\xad\u2011\u0441\u0435\u0440\u0432\u0435\u0440\u0430 (",(0,r.jsx)(e.code,{children:"/htdocs"})," \u0432\xa0",(0,r.jsx)("i",{lang:"en",children:"XAMPP"}),", ",(0,r.jsx)(e.code,{children:"domains/localhost"})," \u0432\xa0",(0,r.jsx)("i",{lang:"en",children:"Open Server Panel"}),")."]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["\u0421\u043e\u0437\u0434\u0430\u0434\u0438\u043c \u0448\u0430\u0431\u043b\u043e\u043d \u0432\u0435\u0431\xad\u2011\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u043d\u0430 \u043a\u0430\u0440\u043a\u0430\u0441\u0435 ",(0,r.jsx)("i",{lang:"en",children:"Laravel"}),"."]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sh",children:"laravel new shop\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u0415\u0441\u043b\u0438 \u043a\u043e\u043c\u0430\u043d\u0434\u0430 \u043d\u0435\xa0\u043d\u0430\u0439\u0434\u0435\u043d\u0430, \u0441\u043a\u0430\u0447\u0430\u0439\u0442\u0435 \u0430\u0440\u0445\u0438\u0432 \u0441\xa0\u0448\u0430\u0431\u043b\u043e\u043d\u043e\u043c \u043f\u0440\u043e\u0435\u043a\u0442\u0430, \u0440\u0430\u0441\u043f\u0430\u043a\u0443\u0439\u0442\u0435 \u0435\u0433\u043e \u0432\xa0\u0432\u044b\u0448\u0435\u043d\u0430\u0437\u0432\u0430\u043d\u043d\u044b\u0439 \u043a\u0430\u0442\u0430\u043b\u043e\u0433."}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["\u0417\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u0435 \u043a\u043b\u0438\u0435\u043d\u0442 ",(0,r.jsx)("i",{lang:"en",children:"MySQL"})," \u0432\xa0\u0438\u043d\u0442\u0435\u0440\u0430\u043a\u0442\u0438\u0432\u043d\u043e\u043c \u0440\u0435\u0436\u0438\u043c\u0435:"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sh",children:"mysql -u root -p\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c."}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["\u0421\u043e\u0437\u0434\u0430\u0439\u0442\u0435 \u0411\u0414 ",(0,r.jsx)(e.code,{children:"shop"}),"."]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sh",children:"CREATE DATABASE shop;\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u0414\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0432\u044b\u0432\u0435\u0434\u0435\u043d\u043e:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sh",children:"Query OK, 1 row affected...\n"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["\u0412\u044b\u0439\u0434\u0438\u0442\u0435 \u0438\u0437 \u043a\u043b\u0438\u0435\u043d\u0442\u0430 ",(0,r.jsx)("i",{lang:"en",children:"MySQL"}),"."]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sh",children:"EXIT;\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u0414\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0432\u044b\u0432\u0435\u0434\u0435\u043d\u043e:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sh",children:"Bye\n"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["\u0415\u0441\u043b\u0438 ",(0,r.jsx)("i",{lang:"en",children:"MySQL"})," \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 \u043d\u0435\u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u044b\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438, \u043e\u0442\u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u0443\u0435\u043c \u0444\u0430\u0439\u043b ",(0,r.jsx)(e.code,{children:".env"}),":"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ini",children:"DB_CONNECTION=mysql\nDB_HOST=127.0.0.1\nDB_PORT=3306\nDB_DATABASE=shop\nDB_USERNAME=root\nDB_PASSWORD=\n"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["\u0421\u043e\u0437\u0434\u0430\u0434\u0438\u043c \u0448\u0430\u0431\u043b\u043e\u043d\u044b \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u043d\u044b\u0445 \u043c\u043e\u0434\u0443\u043b\u0435\u0439 \u0434\u043b\u044f \u0441\u0443\u0449\u043d\u043e\u0441\u0442\u0438 ",(0,r.jsx)(e.code,{children:"Product"}),"."]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sh",children:"php artisan make:model --all --api Product\nphp artisan make:resource ProductResource\nphp artisan make:resource --collection ProductCollection\n"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["\u041f\u0440\u0438\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0446\u0435\u043d\u0430\u0440\u0438\u0439 \u043c\u0438\u0433\u0440\u0430\u0446\u0438\u0438 \u0434\u043b\u044f \u0442\u0430\u0431\u043b\u0438\u0446\u044b ",(0,r.jsx)(e.code,{children:"products"})," \u0432\xa0\u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0435"]}),"\n",(0,r.jsx)(l.Z,{language:"php",showLineNumbers:!0,title:"database/migrations/YYYY_MM_DD_hhmmss_create_products_table.php",children:c}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u0412\u044b\u043f\u043e\u043b\u043d\u0438\u043c \u043c\u0438\u0433\u0440\u0430\u0446\u0438\u044e \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b \u0411\u0414."}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sh",children:"php artisan migrate\n"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["\u0415\u0441\u043b\u0438 \u043f\u0440\u0438 \u043c\u0438\u0433\u0440\u0430\u0446\u0438\u0438 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b \u0411\u0414 \u0432\u044b\u0432\u0435\u0434\u0435\u043d\u044b \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f \u043e\u0431 \u043e\u0448\u0438\u0431\u043a\u0430\u0445, \u0442\u043e \u043f\u0435\u0440\u0435\u0434 \u043f\u043e\u0432\u0442\u043e\u0440\u043d\u043e\u0439 \u043f\u043e\u043f\u044b\u0442\u043a\u043e\u0439 \u043e\u0442\u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u0443\u0439\u0442\u0435 \u0432\u0441\u0435 \u0444\u0430\u0439\u043b\u044b \u0432\xa0\u043a\u0430\u0442\u0430\u043b\u043e\u0433\u0435 ",(0,r.jsx)(e.code,{children:"database/migrations/"})," \u0442\u0430\u043a\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c, \u0447\u0442\u043e\u0431\u044b \u0432\u044b\u0437\u043e\u0432\u044b \u043c\u0435\u0442\u043e\u0434\u0430 ",(0,r.jsx)(e.code,{children:"string()"})," \u043f\u043e\u043b\u0443\u0447\u0438\u043b\u0438 \u0432\u0442\u043e\u0440\u043e\u0439 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\xa0\u2014 \u043d\u0430\u0442\u0443\u0440\u0430\u043b\u044c\u043d\u043e\u0435 \u0447\u0438\u0441\u043b\u043e 191 (\u044d\u0442\u043e \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u0430 \u0438\u043d\u0434\u0435\u043a\u0441\u0438\u0440\u0443\u0435\u043c\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u0438 \u0432\xa0\u0441\u0442\u0430\u0440\u044b\u0445 3\xad\u2011\u0431\u0430\u0439\u0442\u043e\u0432\u044b\u0445 \u043a\u043e\u0434\u0438\u0440\u043e\u0432\u043a\u0430\u0445 ",(0,r.jsx)("i",{lang:"en",children:"MySQL"}),", \u0442\u043e\u0433\u0434\u0430 \u043a\u0430\u043a ",(0,r.jsx)(e.code,{children:"string()"})," \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u0441\u043e\u0437\u0434\u0430\u0451\u0442 \u0441\u0442\u0440\u043e\u043a\u0443 \u0434\u043b\u0438\u043d\u043e\u0439 255\xa0\u0437\u043d\u0430\u043a\u043e\u0432). \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0432\u044b\u0437\u043e\u0432"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-php",children:"$table->string('name');\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u0441\u043b\u0435\u0434\u0443\u0435\u0442 \u0437\u0430\u043c\u0435\u043d\u0438\u0442\u044c \u043d\u0430"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-php",children:"$table->string('name', 191);\n"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u0420\u0435\u0430\u043b\u0438\u0437\u0443\u0435\u043c \u043c\u043e\u0434\u0435\u043b\u044c \u0442\u043e\u0432\u0430\u0440\u0430."}),"\n",(0,r.jsx)(l.Z,{language:"php",showLineNumbers:!0,title:"app/Models/Product.php",children:h}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u0420\u0435\u0430\u043b\u0438\u0437\u0443\u0435\u043c \u043c\u0435\u0442\u043e\u0434\u044b \u043a\u043b\u0430\u0441\u0441\u043e\u0432, \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0438\u0432\u0430\u044e\u0449\u0438\u0445 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u044c \u0432\u0432\u043e\u0434\u0430 \u0434\u0430\u043d\u043d\u044b\u0445."}),"\n",(0,r.jsx)(l.Z,{language:"php",showLineNumbers:!0,title:"app/Http/Requests/StoreProductRequest.php",children:u}),"\n",(0,r.jsx)(l.Z,{language:"php",showLineNumbers:!0,title:"app/Http/Requests/UpdateProductRequest.php",children:x}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u0420\u0435\u0430\u043b\u0438\u0437\u0443\u0435\u043c \u043c\u0435\u0442\u043e\u0434\u044b \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u043b\u0435\u0440\u0430."}),"\n",(0,r.jsx)(l.Z,{language:"php",showLineNumbers:!0,title:"app/Http/Controllers/ProductController.php",children:p}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u0421\u043e\u0437\u0434\u0430\u0434\u0438\u043c \u0433\u0440\u0443\u043f\u043f\u0443 \u0432\u0435\u0431\xad\u2011\u0430\u0434\u0440\u0435\u0441\u043e\u0432 \u0438\xa0\u0441\u0432\u044f\u0436\u0435\u043c \u0438\u0445 \u0441\xa0\u043c\u0435\u0442\u043e\u0434\u0430\u043c\u0438 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u043b\u0435\u0440\u0430."}),"\n",(0,r.jsx)(l.Z,{language:"php",showLineNumbers:!0,title:"routes/api.php",children:i}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u0412\u044b\u0432\u0435\u0434\u0435\u043c \u043f\u0435\u0440\u0435\u0447\u0435\u043d\u044c \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u043e\u0432:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sh",children:"php artisan route:list\n"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u0417\u0430\u043f\u0443\u0441\u0442\u0438\u043c \u043e\u0442\u043b\u0430\u0434\u043e\u0447\u043d\u044b\u0439 \u0432\u0435\u0431\xad\u2011\u0441\u0435\u0440\u0432\u0435\u0440:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sh",children:"php artisan serve\n"})}),"\n",(0,r.jsxs)(e.p,{children:["\u0414\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0432\u044b\u0432\u0435\u0434\u0435\u043d\u043e \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \xab",(0,r.jsx)("i",{lang:"en",children:"Server running"}),"\xbb, \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0449\u0435\u0435 ",(0,r.jsx)("i",{lang:"en",children:"URL"}),", \u043f\u043e \u043a\u043e\u0442\u043e\u0440\u043e\u043c\u0443 \u0432\u0435\u0431\xad\u2011\u0441\u0435\u0440\u0432\u0435\u0440 \u0436\u0434\u0451\u0442 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 (\u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e ",(0,r.jsx)(e.a,{href:"http://127.0.0.1:8000/",children:"http://127.0.0.1:8000/"}),")."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.h2,{id:"\u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0430-api",children:["\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 ",(0,r.jsx)("i",{lang:"en",children:"API"})]}),"\n",(0,r.jsxs)(e.p,{children:["\u041f\u0440\u043e\u0432\u0435\u0440\u0438\u043c ",(0,r.jsx)("i",{lang:"en",children:"API"})," \u043f\u043e\u0441\u0440\u0435\u0434\u0441\u0442\u0432\u043e\u043c ",(0,r.jsx)(e.a,{href:"https://www.postman.com/downloads/",children:(0,r.jsx)("i",{lang:"en",children:"Postman"})})," \u0441\u043e\u0433\u043b\u0430\u0441\u043d\u043e \u0442\u0430\u0431\u043b\u0438\u0446\u0435."]}),"\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"\u041c\u0435\u0442\u043e\u0434"}),(0,r.jsx)(e.th,{children:(0,r.jsx)("i",{lang:"en",children:"URL"})}),(0,r.jsx)(e.th,{children:"\u0421\u0442\u0430\u0442\u0443\u0441 \u043e\u0442\u0432\u0435\u0442\u0430"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"POST"})}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"http://127.0.0.1:8000/api/products/",children:"http://127.0.0.1:8000/api/products/"})}),(0,r.jsx)(e.td,{children:"201"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"GET"})}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"http://127.0.0.1:8000/api/products/",children:"http://127.0.0.1:8000/api/products/"})}),(0,r.jsx)(e.td,{children:"200"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"GET"})}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"http://127.0.0.1:8000/api/products/ID/",children:"http://127.0.0.1:8000/api/products/ID/"})}),(0,r.jsx)(e.td,{children:"200"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"PATCH"})}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"http://127.0.0.1:8000/api/products/ID/",children:"http://127.0.0.1:8000/api/products/ID/"})}),(0,r.jsx)(e.td,{children:"204"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"DELETE"})}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"http://127.0.0.1:8000/api/products/ID/",children:"http://127.0.0.1:8000/api/products/ID/"})}),(0,r.jsx)(e.td,{children:"204"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"GET"})}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"http://127.0.0.1:8000/api/products/",children:"http://127.0.0.1:8000/api/products/"})}),(0,r.jsx)(e.td,{children:"200"})]})]})]}),"\n",(0,r.jsxs)(e.p,{children:["\u041f\u0435\u0440\u0435\u0434 \u043f\u043e\u0434\u0430\u0447\u0435\u0439 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u043d\u0430 \u0432\u043a\u043b\u0430\u0434\u043a\u0435 ",(0,r.jsx)("i",{lang:"en",children:"Headers"})," \u0441\u043b\u0435\u0434\u0443\u0435\u0442 \u0443\u043a\u0430\u0437\u0430\u0442\u044c:"]}),"\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"Key"}),(0,r.jsx)(e.th,{children:"Value"})]})}),(0,r.jsx)(e.tbody,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"Accept"})}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"application/vnd.api+json"})})]})})]}),"\n",(0,r.jsxs)(e.p,{children:["\u041f\u0440\u0438\xa0\u0437\u0430\u043f\u0440\u043e\u0441\u0430\u0445 \u043c\u0435\u0442\u043e\u0434\u0430\u043c\u0438 ",(0,r.jsx)(e.code,{children:"POST"})," (\u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435) \u0438\xa0",(0,r.jsx)(e.code,{children:"PATCH"})," (\u043c\u043e\u0434\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f) \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0442\u0430\u043a\u0436\u0435 \u0437\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u0432\u043a\u043b\u0430\u0434\u043a\u0443 ",(0,r.jsx)("i",{lang:"en",children:"Body"}),". \u041a\u043b\u044e\u0447\u0438 \u0434\u043e\u043b\u0436\u043d\u044b \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u043e\u0432\u0430\u0442\u044c \u0438\u043c\u0435\u043d\u0430\u043c \u043f\u043e\u043b\u0435\u0439 \u0432\xa0\u0442\u0430\u0431\u043b\u0438\u0446\u0435 \u0411\u0414."]}),"\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"Key"}),(0,r.jsx)(e.th,{children:"Value"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"name"})}),(0,r.jsx)(e.td,{children:"\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0430"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"price"})}),(0,r.jsx)(e.td,{children:"\u0426\u0435\u043d\u0430 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0430"})]})]})]}),"\n",(0,r.jsx)(e.h2,{id:"\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0439-\u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441",children:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0439 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["\u0421\u043e\u0437\u0434\u0430\u0434\u0438\u043c \u043a\u0430\u0442\u0430\u043b\u043e\u0433 ",(0,r.jsx)(e.code,{children:"shop-ui"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u041e\u0442\u043a\u0440\u043e\u0435\u043c \u0435\u0449\u0451 \u043e\u0434\u0438\u043d \u044d\u043c\u0443\u043b\u044f\u0442\u043e\u0440 \u0442\u0435\u0440\u043c\u0438\u043d\u0430\u043b\u0430."}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["\u0417\u0430\u043f\u0443\u0441\u0442\u0438\u043c \u043e\u0442\u043b\u0430\u0434\u043e\u0447\u043d\u044b\u0439 \u0441\u0435\u0440\u0432\u0435\u0440, \u0432\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u044b\u0439 \u0432\xa0",(0,r.jsx)("i",{lang:"en",children:"PHP"}),":"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sh",children:"php -S 127.0.0.2:8080\n"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["\u0421\u043e\u0437\u0434\u0430\u0434\u0438\u043c \u0444\u0430\u0439\u043b ",(0,r.jsx)(e.code,{children:"index.html"}),"."]}),"\n",(0,r.jsx)(l.Z,{language:"html",showLineNumbers:!0,title:"shop-ui/index.html",children:d}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["\u0421\u043e\u0437\u0434\u0430\u0434\u0438\u043c \u0444\u0430\u0439\u043b ",(0,r.jsx)(e.code,{children:"product-controller.js"}),"."]}),"\n",(0,r.jsx)(l.Z,{language:"javascript",showLineNumbers:!0,title:"shop-ui/product-controller.js",children:o}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["\u0421\u043e\u0437\u0434\u0430\u0434\u0438\u043c \u0444\u0430\u0439\u043b ",(0,r.jsx)(e.code,{children:"main.js"}),"."]}),"\n",(0,r.jsx)(l.Z,{language:"javascript",showLineNumbers:!0,title:"shop-ui/main.js",children:a}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["\u041e\u0442\u043a\u0440\u043e\u0435\u043c \u0432\xa0\u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0435 \u0432\u0435\u0431\xad\u2011\u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 ",(0,r.jsx)(e.a,{href:"http://127.0.0.2:8080/",children:"http://127.0.0.2:8080/"}),"."]}),"\n"]}),"\n"]})]})}function P(n={}){const{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(v,{...n})}):v(n)}}}]);