"use strict";(self.webpackChunk_edukisto_tlm=self.webpackChunk_edukisto_tlm||[]).push([[652],{4524:function(e,t,n){n.r(t),n.d(t,{assets:function(){return g},contentTitle:function(){return h},default:function(){return v},frontMatter:function(){return k},metadata:function(){return N},toc:function(){return b}});var a=n(7462),r=(n(7294),n(3905)),l="<?php\n\n// highlight-start\nuse App\\Http\\Controllers\\ProductController;\n// highlight-end\nuse Illuminate\\Http\\Request;\nuse Illuminate\\Support\\Facades\\Route;\n\n/*\n|--------------------------------------------------------------------------\n| API Routes\n|--------------------------------------------------------------------------\n|\n| Here is where you can register API routes for your application. These\n| routes are loaded by the RouteServiceProvider and all of them will\n| be assigned to the \"api\" middleware group. Make something great!\n|\n*/\n\nRoute::middleware('auth:sanctum')->get('/user', function (Request $request) {\n    return $request->user();\n});\n\n// highlight-start\nRoute::resource('products', ProductController::class);\n// highlight-end\n",p=n(614),i="<?php\n\nuse Illuminate\\Database\\Migrations\\Migration;\nuse Illuminate\\Database\\Schema\\Blueprint;\nuse Illuminate\\Support\\Facades\\Schema;\n\nreturn new class extends Migration\n{\n    /**\n     * Run the migrations.\n     */\n    public function up(): void\n    {\n        Schema::create('products', function (Blueprint $table) {\n            $table->id();\n            // highlight-start\n            $table->string('name', 55)->collation('utf8mb4_0900_ai_ci')->unique();\n            $table->decimal('price', 8, 2, true)->index();\n            // highlight-end\n            $table->timestamps();\n        });\n    }\n\n    /**\n     * Reverse the migrations.\n     */\n    public function down(): void\n    {\n        Schema::dropIfExists('products');\n    }\n};\n",o='<!DOCTYPE html>\n<html lang="ru-luna1918">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport"\n        content="width=device-width, initial-scale=1.0">\n  <title>\u041c\u0430\u0433\u0430\u0437\u0438\u043d</title>\n  \x3c!-- \u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0430\u0435\u043c \u0444\u0430\u0439\u043b \u0441\u043e \u0441\u0446\u0435\u043d\u0430\u0440\u0438\u0435\u043c JavaScript. --\x3e\n  <script defer\n          src="main.js"\n          type="module"><\/script>\n</head>\n<body>\n  <article>\n    <h1>\u0422\u043e\u0432\u0430\u0440\u044b</h1>\n    <section>\n      <h2>\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0437\u0430\u043f\u0438\u0441\u0438</h2>\n\n      \x3c!-- \u0424\u043e\u0440\u043c\u0430 \u0434\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u0437\u0430\u043f\u0438\u0441\u0438 \u043e\xa0\u0442\u043e\u0432\u0430\u0440\u0435. --\x3e\n      \x3c!-- \u0417\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u043e\u0432 name \u0440\u0430\u0432\u043d\u044b \u0438\u043c\u0435\u043d\u0430\u043c \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u0432 \u0432\xa0\u0442\u0430\u0431\u043b\u0438\u0446\u0435 \u0411\u0414. --\x3e\n      <form action="http://127.0.0.1:8000/api/products/"\n            method="post">\n        <label>\n          \u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435:\n          <input name="name"\n                 required\n                 value="\u041c\u043e\u043b\u043e\u043a\u043e">\n        </label>\n        <label>\n          \u0426\u0435\u043d\u0430:\n          <input min="0.01"\n                 name="price"\n                 required\n                 step="0.01"\n                 type="number"\n                 value="89.99">\n        </label>\n\n        \x3c!-- \u0414\u043b\u044f\xa0\u0443\u0434\u043e\u0431\u0441\u0442\u0432\u0430 \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u0438\u0437 JavaScript \u0434\u0430\u0451\u043c \u043a\u043d\u043e\u043f\u043a\u0435 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440. --\x3e\n        <button id="store"\n                type="submit">\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c</button>\n      </form>\n    </section>\n    <section>\n      <h2>\u0412\u0438\u0442\u0440\u0438\u043d\u0430</h2>\n      \x3c!-- \u0414\u043b\u044f\xa0\u0443\u0434\u043e\u0431\u0441\u0442\u0432\u0430 \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u0438\u0437 JavaScript \u0434\u0430\u0451\u043c \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0443 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440. --\x3e\n      <div id="product-list"></div>\n    </section>\n  </article>\n</body>\n\n</html>\n',s="import { ProductController } from './product-controller.js';\n\nwindow.addEventListener('load', function () {\n  const controller = new ProductController();\n\n  const button = document.getElementById('store');\n  button.addEventListener('click', controller.store);\n\n  controller.getAll();\n});\n",m="<?php\n\nnamespace App\\Models;\n\nuse Illuminate\\Database\\Eloquent\\Factories\\HasFactory;\nuse Illuminate\\Database\\Eloquent\\Model;\n\nclass Product extends Model\n{\n    use HasFactory;\n\n    // highlight-start\n    protected $fillable = [\n        'name',\n        'price',\n    ];\n    // highlight-end\n}\n",u="class ProductController {\n  async getAll() {\n    // URL \u0440\u0435\u0441\u0443\u0440\u0441\u0430 API, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0435\u0442 \u0437\u0430\u043f\u0440\u043e\u0441\u044b \u043d\u0430 \u0432\u044b\u0431\u043e\u0440\u043a\u0443 \u0432\u0441\u0435\u0445 \u0437\u0430\u043f\u0438\u0441\u0435\u0439 \u0438\u0437 \u0411\u0414.\n    const url = 'http://127.0.0.1:8000/api/products/';\n    // \u041f\u043e\u0434\u0430\u0451\u043c HTTP-\u0437\u0430\u043f\u0440\u043e\u0441.\n    const response = await fetch(url, {\n      method: 'GET',\n    });\n    // \u041f\u0430\u0440\u0441\u0438\u043c JSON, \u043f\u0440\u0438\u0448\u0435\u0434\u0448\u0438\u0439 \u0432\xa0\u0442\u0435\u043b\u0435 \u043e\u0442\u0432\u0435\u0442\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430.\n    const products = await response.json();\n\n    // \u0421\u043e\u0437\u0434\u0430\u0451\u043c \u043f\u0443\u0441\u0442\u043e\u0439 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440 \u0434\u043b\u044f \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432 HTML.\n    const articles = document.createDocumentFragment();\n\n    // \u041f\u0435\u0440\u0435\u0431\u0438\u0440\u0430\u0435\u043c \u0437\u0430\u043f\u0438\u0441\u0438 \u043e\xa0\u0442\u043e\u0432\u0430\u0440\u0430\u0445.\n    for (const product of products.data) {\n      // \u0421\u043e\u0437\u0434\u0430\u0451\u043c \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440 \u0442\u043e\u0432\u0430\u0440\u0430.\n      const article = document.createElement('article');\n\n      // \u0421\u043e\u0437\u0434\u0430\u0451\u043c \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a.\n      const h1 = document.createElement('h1');\n\n      // \u0421\u043e\u0437\u0434\u0430\u0451\u043c \u043a\u043d\u043e\u043f\u043a\u0443.\n      const button = document.createElement('button');\n      button.textContent = '\u0423\u0434\u0430\u043b\u0438\u0442\u044c';\n      // \u041e\u0431\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a \u0449\u0435\u043b\u0447\u043a\u0430 \u043c\u044b\u0448\u0438 \u043f\u043e \u043a\u043d\u043e\u043f\u043a\u0435.\n      button.addEventListener('click', async () => {\n        const destroyURL = 'http://127.0.0.1:8000/api/products/' + product.id;\n        // \u041f\u043e\u0434\u0430\u0451\u043c HTTP-\u0437\u0430\u043f\u0440\u043e\u0441.\n        const response = await fetch(destroyURL, {\n          method: 'DELETE',\n        });\n        if (response.ok) {\n          alert('\u0417\u0430\u043f\u0438\u0441\u044c \u0443\u0434\u0430\u043b\u0435\u043d\u0430');\n        } else {\n          alert('\u041e\u0448\u0438\u0431\u043a\u0430!');\n        }\n      });\n\n      h1.textContent = product.name;\n      article.appendChild(h1);\n      article.appendChild(button);\n      articles.appendChild(article);\n    }\n    const container = document.getElementById('product-list');\n    container.appendChild(articles);\n  }\n\n  async store(event) {\n    // \u041e\u0442\u043c\u0435\u043d\u0430 \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u043e\u0433\u043e \u043f\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u043a\u043d\u043e\u043f\u043a\u0438 (\u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0430 \u0444\u043e\u0440\u043c\u044b \u0441\xa0\u043f\u0435\u0440\u0435\u0445\u043e\u0434\u043e\u043c).\n    event.preventDefault();\n\n    // \u041a\u043e\u043f\u0438\u0440\u0443\u0435\u043c \u0434\u0430\u043d\u043d\u044b\u0435 \u0438\u0437 \u0444\u043e\u0440\u043c\u044b \u0432\xa0\u043e\u0431\u044a\u0435\u043a\u0442.\n    // \u0418\u043c\u0435\u043d\u0430 \u043f\u043e\u043b\u0435\u0439 \u043e\u0431\u044a\u0435\u043a\u0442\u0430 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0442 \u0438\u043c\u0435\u043d\u0430\u043c \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u0432 \u0432\xa0\u0442\u0430\u0431\u043b\u0438\u0446\u0435 \u0411\u0414.\n    const data = {\n      'name': document.getElementsByName('name')[0].value,\n      'price': document.getElementsByName('price')[0].value,\n    };\n\n    // \u041e\u0442\u043b\u0430\u0434\u043e\u0447\u043d\u0430\u044f \u043f\u0435\u0447\u0430\u0442\u044c \u0432\xa0\u043a\u043e\u043d\u0441\u043e\u043b\u044c \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430.\n    // console.log(JSON.stringify(data));\n\n    // URL \u0440\u0435\u0441\u0443\u0440\u0441\u0430 API, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0435\u0442 \u0437\u0430\u043f\u0440\u043e\u0441\u044b \u043d\u0430 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0437\u0430\u043f\u0438\u0441\u0435\u0439 \u0432\xa0\u0411\u0414.\n    const url = 'http://127.0.0.1:8000/api/products/';\n\n    // \u041f\u043e\u0434\u0430\u0451\u043c HTTP-\u0437\u0430\u043f\u0440\u043e\u0441.\n    const response = await fetch(url, {\n      // \u041a\u043e\u0434\u0438\u0440\u0443\u0435\u043c \u0432\xa0JSON \u0434\u0430\u043d\u043d\u044b\u0435, \u0432\u0437\u044f\u0442\u044b\u0435 \u0438\u0437 \u0444\u043e\u0440\u043c\u044b.\n      body: JSON.stringify(data),\n      headers: {\n        // \u0421\u043e\u043e\u0431\u0449\u0430\u0435\u043c \u0441\u0435\u0440\u0432\u0435\u0440\u0443, \u0447\u0442\u043e \u043e\u0436\u0438\u0434\u0430\u0435\u043c \u043e\u0442\u0432\u0435\u0442 \u0432\xa0\u0444\u043e\u0440\u043c\u0430\u0442\u0435 JSON.\n        'Accept': 'application/vnd.api+json',\n        // \u0421\u043e\u043e\u0431\u0449\u0430\u0435\u043c \u0441\u0435\u0440\u0432\u0435\u0440\u0443, \u0447\u0442\u043e \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u043c \u0435\u043c\u0443 \u0434\u0430\u043d\u043d\u044b\u0435 \u0432\xa0\u0444\u043e\u0440\u043c\u0430\u0442\u0435 JSON.\n        'Content-Type': 'application/vnd.api+json',\n      },\n      method: 'POST',\n    });\n\n    // \u041e\u0442\u043b\u0430\u0434\u043e\u0447\u043d\u0430\u044f \u043f\u0435\u0447\u0430\u0442\u044c \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u043e\u0432 \u043e\u0442\u0432\u0435\u0442\u0430 \u0432\xa0\u043a\u043e\u043d\u0441\u043e\u043b\u044c \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430.\n    // console.log(response.headers.forEach(console.log));\n\n    if (response.ok) {\n      alert('\u0417\u0430\u043f\u0438\u0441\u044c \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0430');\n    } else {\n      alert('\u041e\u0448\u0438\u0431\u043a\u0430!');\n    }\n  }\n}\n\nexport {\n  ProductController,\n};\n",d="<?php\n\nnamespace App\\Http\\Requests;\n\nuse Illuminate\\Foundation\\Http\\FormRequest;\n\nclass StoreProductRequest extends FormRequest\n{\n    /**\n     * Determine if the user is authorized to make this request.\n     */\n    public function authorize(): bool\n    {\n        // highlight-start\n        return true;\n        // highlight-end\n    }\n\n    /**\n     * Get the validation rules that apply to the request.\n     *\n     * @return array<string, \\Illuminate\\Contracts\\Validation\\ValidationRule|array<mixed>|string>\n     */\n    public function rules(): array\n    {\n        return [\n            // highlight-start\n            'name' => [\n                'max:55',\n                'required',\n                'string',\n                'unique:products,name',\n            ],\n            'price' => [\n                'decimal:0,2',\n                'max:999999.99',\n                'min:0',\n                'required',\n            ],\n            // highlight-end\n        ];\n    }\n}\n",c="<?php\n\nnamespace App\\Http\\Requests;\n\nuse Illuminate\\Foundation\\Http\\FormRequest;\n\nclass UpdateProductRequest extends FormRequest\n{\n    /**\n     * Determine if the user is authorized to make this request.\n     */\n    public function authorize(): bool\n    {\n        // highlight-start\n        return true;\n        // highlight-end\n    }\n\n    /**\n     * Get the validation rules that apply to the request.\n     *\n     * @return array<string, \\Illuminate\\Contracts\\Validation\\ValidationRule|array<mixed>|string>\n     */\n    public function rules(): array\n    {\n        return [\n            // highlight-start\n            'name' => [\n                'max:55',\n                'string',\n                'unique:products,name',\n            ],\n            'price' => [\n                'decimal:0,2',\n                'max:999999.99',\n                'min:0',\n            ],\n            // highlight-end\n        ];\n    }\n}\n";const k={},h="\u041f\u0440\u0438\u043c\u0435\u0440 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0437\u0430\u0434\u0430\u043d\u0438\u044f",N={unversionedId:"laravel/01/example",id:"laravel/01/example",title:"\u041f\u0440\u0438\u043c\u0435\u0440 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0437\u0430\u0434\u0430\u043d\u0438\u044f",description:"\u041f\u0440\u043e\u0435\u043a\u0442 \u043d\u0430 Laravel",source:"@site/docs/laravel/01/example.mdx",sourceDirName:"laravel/01",slug:"/laravel/01/example",permalink:"/laravel/01/example",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u0417\u0430\u0434\u0430\u043d\u0438\u0435",permalink:"/laravel/01/task"}},g={},b=[{value:'\u041f\u0440\u043e\u0435\u043a\u0442 \u043d\u0430 <i lang="en">Laravel</i>',id:"\u043f\u0440\u043e\u0435\u043a\u0442-\u043d\u0430-laravel",level:2},{value:'\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 <i lang="en">API</i>',id:"\u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0430-api",level:2},{value:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0439 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441",id:"\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0439-\u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441",level:2}],y={toc:b},C="wrapper";function v(e){let{components:t,...n}=e;return(0,r.kt)(C,(0,a.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u043f\u0440\u0438\u043c\u0435\u0440-\u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f-\u0437\u0430\u0434\u0430\u043d\u0438\u044f"},"\u041f\u0440\u0438\u043c\u0435\u0440 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0437\u0430\u0434\u0430\u043d\u0438\u044f"),(0,r.kt)("h2",{id:"\u043f\u0440\u043e\u0435\u043a\u0442-\u043d\u0430-laravel"},"\u041f\u0440\u043e\u0435\u043a\u0442 \u043d\u0430 ",(0,r.kt)("i",{lang:"en"},"Laravel")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u041e\u0442\u043a\u0440\u043e\u0435\u043c \u044d\u043c\u0443\u043b\u044f\u0442\u043e\u0440 \u043a\u043e\u043d\u0441\u043e\u043b\u0438.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u041f\u0435\u0440\u0435\u0439\u0434\u0451\u043c \u0432\xa0\u043a\u0430\u0442\u0430\u043b\u043e\u0433 \u0432\u0435\u0431\xad\u2011\u0441\u0435\u0440\u0432\u0435\u0440\u0430 (",(0,r.kt)("inlineCode",{parentName:"p"},"/htdocs")," \u0432\xa0",(0,r.kt)("i",{lang:"en"},"XAMPP"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"domains/localhost")," \u0432\xa0",(0,r.kt)("i",{lang:"en"},"Open Server Panel"),").")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u0421\u043e\u0437\u0434\u0430\u0434\u0438\u043c \u0448\u0430\u0431\u043b\u043e\u043d \u0432\u0435\u0431\xad\u2011\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u043d\u0430 \u043a\u0430\u0440\u043a\u0430\u0441\u0435 ",(0,r.kt)("i",{lang:"en"},"Laravel"),"."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"laravel new shop\n")),(0,r.kt)("p",{parentName:"li"},"\u0415\u0441\u043b\u0438 \u043a\u043e\u043c\u0430\u043d\u0434\u0430 \u043d\u0435\xa0\u043d\u0430\u0439\u0434\u0435\u043d\u0430, \u0441\u043a\u0430\u0447\u0430\u0439\u0442\u0435 \u0430\u0440\u0445\u0438\u0432 \u0441\xa0\u0448\u0430\u0431\u043b\u043e\u043d\u043e\u043c \u043f\u0440\u043e\u0435\u043a\u0442\u0430, \u0440\u0430\u0441\u043f\u0430\u043a\u0443\u0439\u0442\u0435 \u0435\u0433\u043e \u0432\xa0\u0432\u044b\u0448\u0435\u043d\u0430\u0437\u0432\u0430\u043d\u043d\u044b\u0439 \u043a\u0430\u0442\u0430\u043b\u043e\u0433.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u0417\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u0435 \u043a\u043b\u0438\u0435\u043d\u0442 ",(0,r.kt)("i",{lang:"en"},"MySQL")," \u0432\xa0\u0438\u043d\u0442\u0435\u0440\u0430\u043a\u0442\u0438\u0432\u043d\u043e\u043c \u0440\u0435\u0436\u0438\u043c\u0435:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"mysql -u root -p\n")),(0,r.kt)("p",{parentName:"li"},"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u0421\u043e\u0437\u0434\u0430\u0439\u0442\u0435 \u0411\u0414 ",(0,r.kt)("inlineCode",{parentName:"p"},"shop"),"."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"CREATE DATABASE shop;\n")),(0,r.kt)("p",{parentName:"li"},"\u0414\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0432\u044b\u0432\u0435\u0434\u0435\u043d\u043e:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"Query OK, 1 row affected...\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u0412\u044b\u0439\u0434\u0438\u0442\u0435 \u0438\u0437 \u043a\u043b\u0438\u0435\u043d\u0442\u0430 ",(0,r.kt)("i",{lang:"en"},"MySQL"),"."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"EXIT;\n")),(0,r.kt)("p",{parentName:"li"},"\u0414\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0432\u044b\u0432\u0435\u0434\u0435\u043d\u043e:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"Bye\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u0415\u0441\u043b\u0438 ",(0,r.kt)("i",{lang:"en"},"MySQL")," \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 \u043d\u0435\u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u044b\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438, \u043e\u0442\u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u0443\u0435\u043c \u0444\u0430\u0439\u043b ",(0,r.kt)("inlineCode",{parentName:"p"},".env"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-ini"},"DB_CONNECTION=mysql\nDB_HOST=127.0.0.1\nDB_PORT=3306\nDB_DATABASE=shop\nDB_USERNAME=root\nDB_PASSWORD=\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u0421\u043e\u0437\u0434\u0430\u0434\u0438\u043c \u0448\u0430\u0431\u043b\u043e\u043d\u044b \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u043d\u044b\u0445 \u043c\u043e\u0434\u0443\u043b\u0435\u0439 \u0434\u043b\u044f \u0441\u0443\u0449\u043d\u043e\u0441\u0442\u0438 ",(0,r.kt)("inlineCode",{parentName:"p"},"Product"),"."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"php artisan make:model --all --api Product\nphp artisan make:resource ProductResource\nphp artisan make:resource --collection ProductCollection\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u041f\u0440\u0438\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0446\u0435\u043d\u0430\u0440\u0438\u0439 \u043c\u0438\u0433\u0440\u0430\u0446\u0438\u0438 \u0434\u043b\u044f \u0442\u0430\u0431\u043b\u0438\u0446\u044b ",(0,r.kt)("inlineCode",{parentName:"p"},"products")," \u0432\xa0\u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0435"),(0,r.kt)(p.Z,{language:"php",showLineNumbers:!0,title:"database/migrations/YYYY_MM_DD_hhmmss_create_products_table.php",mdxType:"CodeBlock"},i)),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u0412\u044b\u043f\u043e\u043b\u043d\u0438\u043c \u043c\u0438\u0433\u0440\u0430\u0446\u0438\u044e \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b \u0411\u0414."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"php artisan migrate\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u0415\u0441\u043b\u0438 \u043f\u0440\u0438 \u043c\u0438\u0433\u0440\u0430\u0446\u0438\u0438 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b \u0411\u0414 \u0432\u044b\u0432\u0435\u0434\u0435\u043d\u044b \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f \u043e\u0431 \u043e\u0448\u0438\u0431\u043a\u0430\u0445, \u0442\u043e \u043f\u0435\u0440\u0435\u0434 \u043f\u043e\u0432\u0442\u043e\u0440\u043d\u043e\u0439 \u043f\u043e\u043f\u044b\u0442\u043a\u043e\u0439 \u043e\u0442\u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u0443\u0439\u0442\u0435 \u0432\u0441\u0435 \u0444\u0430\u0439\u043b\u044b \u0432\xa0\u043a\u0430\u0442\u0430\u043b\u043e\u0433\u0435 ",(0,r.kt)("inlineCode",{parentName:"p"},"database/migrations/")," \u0442\u0430\u043a\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c, \u0447\u0442\u043e\u0431\u044b \u0432\u044b\u0437\u043e\u0432\u044b \u043c\u0435\u0442\u043e\u0434\u0430 ",(0,r.kt)("inlineCode",{parentName:"p"},"string()")," \u043f\u043e\u043b\u0443\u0447\u0438\u043b\u0438 \u0432\u0442\u043e\u0440\u043e\u0439 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\xa0\u2014 \u043d\u0430\u0442\u0443\u0440\u0430\u043b\u044c\u043d\u043e\u0435 \u0447\u0438\u0441\u043b\u043e 191 (\u044d\u0442\u043e \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u0430 \u0438\u043d\u0434\u0435\u043a\u0441\u0438\u0440\u0443\u0435\u043c\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u0438 \u0432\xa0\u0441\u0442\u0430\u0440\u044b\u0445 3\xad\u2011\u0431\u0430\u0439\u0442\u043e\u0432\u044b\u0445 \u043a\u043e\u0434\u0438\u0440\u043e\u0432\u043a\u0430\u0445 ",(0,r.kt)("i",{lang:"en"},"MySQL"),", \u0442\u043e\u0433\u0434\u0430 \u043a\u0430\u043a ",(0,r.kt)("inlineCode",{parentName:"p"},"string()")," \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u0441\u043e\u0437\u0434\u0430\u0451\u0442 \u0441\u0442\u0440\u043e\u043a\u0443 \u0434\u043b\u0438\u043d\u043e\u0439 255\xa0\u0437\u043d\u0430\u043a\u043e\u0432). \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0432\u044b\u0437\u043e\u0432"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$table->string('name');\n")),(0,r.kt)("p",{parentName:"li"},"\u0441\u043b\u0435\u0434\u0443\u0435\u0442 \u0437\u0430\u043c\u0435\u043d\u0438\u0442\u044c \u043d\u0430"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$table->string('name', 191);\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u0420\u0435\u0430\u043b\u0438\u0437\u0443\u0435\u043c \u043c\u043e\u0434\u0435\u043b\u044c \u0442\u043e\u0432\u0430\u0440\u0430."),(0,r.kt)(p.Z,{language:"php",showLineNumbers:!0,title:"app/Models/Product.php",mdxType:"CodeBlock"},m)),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u0420\u0435\u0430\u043b\u0438\u0437\u0443\u0435\u043c \u043c\u0435\u0442\u043e\u0434\u044b \u043a\u043b\u0430\u0441\u0441\u043e\u0432, \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0438\u0432\u0430\u044e\u0449\u0438\u0445 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u044c \u0432\u0432\u043e\u0434\u0430 \u0434\u0430\u043d\u043d\u044b\u0445."),(0,r.kt)(p.Z,{language:"php",showLineNumbers:!0,title:"app/Http/Requests/StoreProductRequest.php",mdxType:"CodeBlock"},d),(0,r.kt)(p.Z,{language:"php",showLineNumbers:!0,title:"app/Http/Requests/UpdateProductRequest.php",mdxType:"CodeBlock"},c)),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u0420\u0435\u0430\u043b\u0438\u0437\u0443\u0435\u043c \u043c\u0435\u0442\u043e\u0434\u044b \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u043b\u0435\u0440\u0430."),(0,r.kt)(p.Z,{language:"php",showLineNumbers:!0,title:"app/Http/Controllers/ProductController.php",mdxType:"CodeBlock"},d)),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u0421\u043e\u0437\u0434\u0430\u0434\u0438\u043c \u0433\u0440\u0443\u043f\u043f\u0443 \u0432\u0435\u0431\xad\u2011\u0430\u0434\u0440\u0435\u0441\u043e\u0432 \u0438\xa0\u0441\u0432\u044f\u0436\u0435\u043c \u0438\u0445 \u0441\xa0\u043c\u0435\u0442\u043e\u0434\u0430\u043c\u0438 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u043b\u0435\u0440\u0430."),(0,r.kt)(p.Z,{language:"php",showLineNumbers:!0,title:"routes/api.php",mdxType:"CodeBlock"},l)),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u0412\u044b\u0432\u0435\u0434\u0435\u043c \u043f\u0435\u0440\u0435\u0447\u0435\u043d\u044c \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u043e\u0432:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"php artisan route:list\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u0417\u0430\u043f\u0443\u0441\u0442\u0438\u043c \u043e\u0442\u043b\u0430\u0434\u043e\u0447\u043d\u044b\u0439 \u0432\u0435\u0431\xad\u2011\u0441\u0435\u0440\u0432\u0435\u0440:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"php artisan serve\n")),(0,r.kt)("p",{parentName:"li"},"\u0414\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0432\u044b\u0432\u0435\u0434\u0435\u043d\u043e \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \xab",(0,r.kt)("i",{lang:"en"},"Server running"),"\xbb, \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0449\u0435\u0435 ",(0,r.kt)("i",{lang:"en"},"URL"),", \u043f\u043e \u043a\u043e\u0442\u043e\u0440\u043e\u043c\u0443 \u0432\u0435\u0431\xad\u2011\u0441\u0435\u0440\u0432\u0435\u0440 \u0436\u0434\u0451\u0442 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 (\u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e ",(0,r.kt)("a",{parentName:"p",href:"http://127.0.0.1:8000/"},"http://127.0.0.1:8000/"),")."))),(0,r.kt)("h2",{id:"\u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0430-api"},"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 ",(0,r.kt)("i",{lang:"en"},"API")),(0,r.kt)("p",null,"\u041f\u0440\u043e\u0432\u0435\u0440\u0438\u043c ",(0,r.kt)("i",{lang:"en"},"API")," \u043f\u043e\u0441\u0440\u0435\u0434\u0441\u0442\u0432\u043e\u043c ",(0,r.kt)("a",{parentName:"p",href:"https://www.postman.com/downloads/"},(0,r.kt)("i",{lang:"en"},"Postman"))," \u0441\u043e\u0433\u043b\u0430\u0441\u043d\u043e \u0442\u0430\u0431\u043b\u0438\u0446\u0435."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u041c\u0435\u0442\u043e\u0434"),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("i",{lang:"en"},"URL")),(0,r.kt)("th",{parentName:"tr",align:null},"\u0421\u0442\u0430\u0442\u0443\u0441 \u043e\u0442\u0432\u0435\u0442\u0430"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"POST")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://127.0.0.1:8000/api/products/"},"http://127.0.0.1:8000/api/products/")),(0,r.kt)("td",{parentName:"tr",align:null},"201")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"GET")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://127.0.0.1:8000/api/products/"},"http://127.0.0.1:8000/api/products/")),(0,r.kt)("td",{parentName:"tr",align:null},"200")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"GET")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://127.0.0.1:8000/api/products/ID/"},"http://127.0.0.1:8000/api/products/ID/")),(0,r.kt)("td",{parentName:"tr",align:null},"200")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"PATCH")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://127.0.0.1:8000/api/products/ID/"},"http://127.0.0.1:8000/api/products/ID/")),(0,r.kt)("td",{parentName:"tr",align:null},"204")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DELETE")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://127.0.0.1:8000/api/products/ID/"},"http://127.0.0.1:8000/api/products/ID/")),(0,r.kt)("td",{parentName:"tr",align:null},"204")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"GET")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://127.0.0.1:8000/api/products/"},"http://127.0.0.1:8000/api/products/")),(0,r.kt)("td",{parentName:"tr",align:null},"200")))),(0,r.kt)("p",null,"\u041f\u0435\u0440\u0435\u0434 \u043f\u043e\u0434\u0430\u0447\u0435\u0439 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u043d\u0430 \u0432\u043a\u043b\u0430\u0434\u043a\u0435 ",(0,r.kt)("i",{lang:"en"},"Headers")," \u0441\u043b\u0435\u0434\u0443\u0435\u0442 \u0443\u043a\u0430\u0437\u0430\u0442\u044c:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"|Key     |Value                     |\n|--------|--------------------------|\n|`Accept`|`application/vnd.api+json`|\n")),(0,r.kt)("p",null,"\u041f\u0440\u0438\xa0\u0437\u0430\u043f\u0440\u043e\u0441\u0430\u0445 \u043c\u0435\u0442\u043e\u0434\u0430\u043c\u0438 ",(0,r.kt)("inlineCode",{parentName:"p"},"POST")," (\u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435) \u0438\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"PATCH")," (\u043c\u043e\u0434\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f) \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0442\u0430\u043a\u0436\u0435 \u0437\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u0432\u043a\u043b\u0430\u0434\u043a\u0443 ",(0,r.kt)("i",{lang:"en"},"Body"),". \u041a\u043b\u044e\u0447\u0438 \u0434\u043e\u043b\u0436\u043d\u044b \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u043e\u0432\u0430\u0442\u044c \u0438\u043c\u0435\u043d\u0430\u043c \u043f\u043e\u043b\u0435\u0439 \u0432\xa0\u0442\u0430\u0431\u043b\u0438\u0446\u0435 \u0411\u0414."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"|Key    |Value                     |\n|-------|--------------------------|\n|`name` |\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0430     |\n|`price`|\u0426\u0435\u043d\u0430 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0430             |\n")),(0,r.kt)("h2",{id:"\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0439-\u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441"},"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0439 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u0421\u043e\u0437\u0434\u0430\u0434\u0438\u043c \u043a\u0430\u0442\u0430\u043b\u043e\u0433 ",(0,r.kt)("inlineCode",{parentName:"p"},"shop-ui"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u041e\u0442\u043a\u0440\u043e\u0435\u043c \u0435\u0449\u0451 \u043e\u0434\u0438\u043d \u044d\u043c\u0443\u043b\u044f\u0442\u043e\u0440 \u0442\u0435\u0440\u043c\u0438\u043d\u0430\u043b\u0430.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u0417\u0430\u043f\u0443\u0441\u0442\u0438\u043c \u043e\u0442\u043b\u0430\u0434\u043e\u0447\u043d\u044b\u0439 \u0441\u0435\u0440\u0432\u0435\u0440, \u0432\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u044b\u0439 \u0432\xa0",(0,r.kt)("i",{lang:"en"},"PHP"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"php -S 127.0.0.2:8080\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u0421\u043e\u0437\u0434\u0430\u0434\u0438\u043c \u0444\u0430\u0439\u043b ",(0,r.kt)("inlineCode",{parentName:"p"},"index.html"),"."),(0,r.kt)(p.Z,{language:"html",showLineNumbers:!0,title:"shop-ui/index.html",mdxType:"CodeBlock"},o)),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u0421\u043e\u0437\u0434\u0430\u0434\u0438\u043c \u0444\u0430\u0439\u043b ",(0,r.kt)("inlineCode",{parentName:"p"},"product-controller.js"),"."),(0,r.kt)(p.Z,{language:"javascript",showLineNumbers:!0,title:"shop-ui/product-controller.js",mdxType:"CodeBlock"},u)),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u0421\u043e\u0437\u0434\u0430\u0434\u0438\u043c \u0444\u0430\u0439\u043b ",(0,r.kt)("inlineCode",{parentName:"p"},"main.js"),"."),(0,r.kt)(p.Z,{language:"javascript",showLineNumbers:!0,title:"shop-ui/main.js",mdxType:"CodeBlock"},s)),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u041e\u0442\u043a\u0440\u043e\u0435\u043c \u0432\xa0\u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0435 \u0432\u0435\u0431\xad\u2011\u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 ",(0,r.kt)("a",{parentName:"p",href:"http://127.0.0.2:8080/"},"http://127.0.0.2:8080/"),"."))))}v.isMDXComponent=!0}}]);