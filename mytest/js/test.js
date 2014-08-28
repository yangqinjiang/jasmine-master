describe("A suite of basic functions",function  () {
	var name;


	it("sayHello",function(){
		name = "Conan";
		var exp = "Hello Conan";
		expect(exp).toEqual(sayHello(name));
	});

	it("reverse word",function(){
		expect("DCBA").toEqual(reverse("ABCD"));
		expect("Conan").toEqual(reverse("nanoC"));
	});

});

describe("A suite of jasmine's function",function(){
	describe("Expectations",function(){
		it("Expectations",function(){
			expect("AAA").toEqual("AAA");
			expect(52.786).toMatch(/\d*.\d\d/);//格式是否匹配
			expect(true).toBe(!false);//
			expect(null).toBeNull();
			expect("ABCD").toContain("B");//是否包含
			expect(52,78).toBeLessThan(99);//是否大于
			expect(52,78).toBeGreaterThan(51);//是否小于

			var x =true;
			var y;
			expect(x).toBe(true);
			expect(x).toBeDefined();//是否已经定义,初始化
			expect(y).toBeUndefined();
			expect(x).toBeTruthy();
			expect(!x).toBeFalsy();
			expect(y).toBeFalsy();

			var fun = function(){return a+1};//此代码应该抛出异常
			expect(fun).toThrow();//检测是否抛出异常
		});
	});
});

//对开始前和使用后的变量赋值
describe("Setup and Teardown",function(){
	var foo;
	beforeEach(function(){//测试之前执行
		foo=0;
		foo+=1;
	});

	afterEach(function(){//测试之后执行
		foo=0;
	});

	it("is just a function ,so it can contain any code.",function(){
		expect(foo).toEqual(1);
	});

	it("can have more than one expectation.",function(){
		expect(foo).toEqual(1);
		expect(true).toEqual(true);
		console.log("!!!!");
	});
});

//对忽略suite的声明
xdescribe("Disabling Specs and Suites",function(){
	it("Disabling Specs and Suites",function(){
		console.log("........");
		expect("AAA").toEqual("AAA");
	});
});

//对异步程序的单元测试
describe("Async specs",function(){
	var value;
	beforeEach(function(done){
		setTimeout(function(){
			value=0;
			done();
		},1);
	});

	//
	it("should support exec of test preparation and expectations",function(done){
		value++;
		expect(value).toBeGreaterThan(0);
		done();
	});

	//
});

describe("long Async specs",function(){
	var originalTimeout;
	beforeEach(function(){
		originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
		jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000;//修改时间间隔
	});

	it("takes a long time",function(done){
		setTimeout(function(){
			expect(1).toEqual(2-1);
			done();
		},900);
	});

	afterEach(function(){
		jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;//恢复时间间隔
	});
});