import React from "react";

function HeroDashboard() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Navbar */}
      <nav className="flex justify-around items-center px-8 py-4 bg-white shadow fixed w-full z-100">
        <div className="w-[100px]"><img src="/casa-logo.png" alt="" /></div>
        <ul className="hidden md:flex gap-6 text-gray-800 font-medium">
          <li className="hover:text-green-700 duration-300"><a href="#">Services</a></li>
          <li className="hover:text-green-700 duration-300"><a href="#">How it works</a></li>
          <li className="hover:text-green-700 duration-300"><a href="#">Why is different</a></li>
          <li className="hover:text-green-700 duration-300"><a href="#">Reviews</a></li>
          <li className="hover:text-green-700 duration-300"><a href="#">Pricing</a></li>
          <li className="hover:text-green-700 duration-300"><a href="#">Contact</a></li>
        </ul>
        <div className="flex gap-4">
          <button className="p-[6px_20px] text-green-900 rounded-4xl bg-green-100 cursor-pointer duration-300 hover:opacity-80">Sign In</button>
          <button className="p-[6px_20px] text-white rounded-4xl bg-black cursor-pointer duration-300 hover:opacity-80">Sign Up</button>
        </div>
      </nav>

      <br/><br/><br/>



      {/* Hero Section */}
      <section className="text-center py-16 px-6">
        <div className="flex justify-center items-center"><p className="text-[10px] md:text-sm font-semibold text-green-900 bg-green-100 rounded-4xl p-[6px_20px] w-[200px]">Fast. secure. hassle-free</p></div>
        <h2 className="inline-flex text-xl md:text-4xl font-semibold mt-4 text-black">
          Get Paid Faster <span className="w-[50px] h-[40px] px-1 pt-2"><img src="/images/Illustration.png" alt="" /></span> Instant Cash for Businesses!
        </h2>
        <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
          Stop waiting months for credit card payments. CASA helps business
          owners access cash instantly by converting card transactions into
          immediate funds.
        </p>
        <button className="mt-6 px-6 py-2 bg-green-900 text-white rounded-4xl shadow cursor-pointer hover:opacity-80 duration-300">
          Get Started
        </button>
      </section>



      {/* Dashboard Snapshot */}
      <section className="flex justify-center items-center gap-20">
        {/* Card 1 */}
        <div className="w-[300px] bg-transparent">
          <img src="/images/Card 1.png" alt="" />
        </div>

        {/* Card 2 */}
        <div className="w-[300px] bg-transparent">
          <img src="/images/Card 2.png" alt="" />
        </div>

        {/* Card 3 */}
        <div className="w-[300px] bg-transparent">
          <img src="/images/Card 3.png" alt="" />
        </div>
      </section>
      <br/>




    {/* trusted by */}



    <section className="inline-flex justify-center items-center gap-15 py-16 bg-green-900 text-center w-full h-[50px]">
      <div className="flex flex-col">
        <h2 className="text-2xl md:text-xl font-semibold text-white">
            Trusted by
        </h2>
        <p className="mt-2 text-xl text-white font-semibold">Top Companies</p>
      </div>
      <div><img src="/images/Line 28.png" alt="" /></div>

      {/* Logos */}

      <div className="inline-flex gap-1"><img className="w-[20px]" src="/images/Vector.png" alt="" /><p className="text-white font-semibold text-xl">Cubyn</p></div>

      <div className="inline-flex gap-1"><img className="w-[20px]" src="/images/Bastion.png" alt="" /><p className="text-white font-semibold text-xl">bastion</p></div>

      <div className="inline-flex gap-1"><img className="w-[20px]" src="/images/Digit.png" alt="" /><p className="text-white font-semibold text-xl tracking-widest">DIGITS</p></div>

      <div className="inline-flex gap-1"><img className="w-[20px]" src="/images/Pipe.png" alt="" /><p className="text-white font-semibold text-xl">pipe</p></div>

      <div className="inline-flex gap-1"><img className="w-[20px]" src="/images/Ramp.png" alt="" /><p className="text-white font-semibold text-xl">ramp</p></div>
     
    </section>





    {/* second page */}


     <section className="py-20 bg-gray-50 px-6 md:px-16">

      <div className="flex flex-col md:flex-row justify-around items-center gap-10">
        <div className="flex flex-col justify-center items-start w-[450px]">
            <h2 className="text-sm font-semibold text-green-900 bg-green-100 rounded-4xl w-[170px] p-[4px_10px] mb-4 text-center">About Casa Service</h2>
            <h3 className="text-4xl font-bold text-black text-left">Revolutionizing Cash Flow for Business Owners!</h3>
        </div>

        <div className="flex flex-col justify-center items-start gap-8 w-[400px]">
            <p className="mt-4 text-gray-600 text-lg">
            Empowering businesses with faster cash access, CASA provides a secure,
            fast, and flexible solution to get early payments for credit card
            sales.
            </p>
            <button className="mt-6 px-6 py-3 bg-green-800 text-white rounded-4xl shadow cursor-pointer hover:opacity-80 duration-300">Join Now</button>
        </div>
      </div>




      {/* Highlights */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-20 mt-20">
        <div className="bg-gray-100 rounded-[10px] p-6 w-[300px] cursor-pointer hover:scale-105 duration-300 shadow-xl">
          <h4 className="font-bold text-gray-900 text-xl mb-4">Secure and Instant Cash Advances</h4>
          <img className="w-[40px]" src="/images/Icon 1.png" alt="" />
          <p className="mt-4 text-gray-600 text-sm">
            No more waiting weeks—convert daily credit card transactions into
            cash within 24 hours to keep your business running smoothly.
          </p> 
        </div>

        <div className="bg-gray-100 rounded-[10px] p-6 w-[300px] cursor-pointer hover:scale-105 duration-300 shadow-xl">
            <h4 className="font-bold text-gray-900 text-xl mb-4">Transparent and Fair Pricing Process</h4>
            <img className="w-[40px]" src="/images/Icon 2.png" alt="" />
            <p className="text-gray-600 mt-4 text-sm">
              No hidden fees, no surprises—enjoy clear, upfront pricing with flexible funding options.
               So you always know what to expect.
            </p>
        </div>

        <div className="bg-green-800 rounded-[10px] p-6 w-[300px] cursor-pointer hover:scale-105 duration-300 shadow-xl">
            <h4 className="font-bold text-white text-xl mb-4">Flexible and Secure Payout Options</h4>
            <img className="w-[40px]" src="/images/Icon 3.png" alt="" />
            <p className="text-white mt-4 text-sm">
              We offer flexible and easy payout options tailored to your needs, ensuring quick eccess to your funds.
               Choose from multiple payment methods.
            </p>
        </div>
      </div>
    </section>





    {/* third page */}



    <section className="py-20 bg-white px-6 md:px-16">

      <div className="flex flex-col justify-center items-center gap-5">
        <h2 className="text-sm md:text-base font-semibold text-center text-green-900 bg-green-100 p-[6px_15px] w-[150px] rounded-4xl">How it works</h2>
        <p className="mt-4 text-4xl font-bold text-gray-900 max-w-[500px] text-center">Simple & Fast – Receive Your Payment in 3 Steps!</p>
        <p className="mt-2 text-gray-500 mx-auto max-w-[550px] text-center">
          Empowering businesses with faster cash access, CASA provides a secure,
          fast, and flexible solution to get early payments for credit card
          sales.
        </p>
      </div>


      {/* Steps */}


    <div className="flex flex-col md:flex-row justify-center items-center gap-20 mt-20">

        <div className="w-[300px] shadow-xl rounded-[10px] cursor-pointer hover:scale-105 duration-300">
            <img className="px-4 w-full m-1 mt-6" src="/images/Sign up form.png" alt="" />
            <h3 className="text-xl font-bold text-gray-900 px-4 mx-1 my-2">Connect Your Business</h3>
            <p className="text-gray-500 text-sm md:text-base px-4 mx-1 my-2">Sign up and link your credit card processor or POS system with CASA.
                 We support all major payment providers.</p>
            <p className="px-4 m-1 text-sm"><span className="text-green-800 shadow">✓</span> Fast approval & easy integration</p>
            <p className="px-4 m-1 mb-6 text-sm"><span className="text-green-800 shadow">✓</span> No impact on your credit score</p>
        </div>

        <div className="w-[300px] shadow-xl rounded-[10px] cursor-pointer hover:scale-105 duration-300">
            <img className="px-4 w-full m-1 mt-6" src="/images/Graphic Content.png" alt="" />
            <h3 className="text-xl font-bold text-gray-900 px-4 mx-1 my-2">Transactions for Early Payment</h3>
            <p className="text-gray-500 text-sm md:text-base px-4 mx-1 my-2">Every morning, your previous day’s credit card transactions are 
                automatically submitted for funding</p>
            <p className="px-4 m-1 text-sm"><span className="text-green-800 shadow">✓</span> No waiting for 30-60 day settlements</p>
            <p className="px-4 m-1 mb-6 text-sm"><span className="text-green-800 shadow">✓</span> Transparent discount rates</p>
        </div>

        <div className="w-[300px] shadow-xl rounded-[10px] cursor-pointer hover:scale-105 duration-300">
            <img className="px-4 w-full m-1 mt-6" src="/images/Graphic content 2.png" alt="" />
            <h3 className="text-xl font-bold text-gray-900 px-4 mx-1 my-2">Receive Funds & Grow</h3>
            <p className="text-gray-500 text-sm md:text-base px-4 mx-1 my-2">Every morning, your previous day’s credit card transactions are 
                automatically submitted for funding</p>
            <p className="px-4 m-1 text-sm"><span className="text-green-800 shadow">✓</span> Same-day or next-day payouts</p>
            <p className="px-4 m-1 mb-6 text-sm"><span className="text-green-800 shadow">✓</span> Flexible repayment from future sales</p>
        </div>

    </div>
    
    </section>




    {/* fourth page */}


    <section className="py-20 bg-gray-50 px-6 md:px-16">

    <div className="flex flex-col justify-center items-center gap-5">
        <h2 className="text-sm font-semibold text-center text-green-900 bg-green-100 p-[6px_15px] w-[200px] rounded-4xl">Why CASA Different</h2>
        <p className="mt-4 text-4xl font-bold text-gray-900 max-w-[450px] text-center">Why CASA Stands Out from the Rest</p>
        <p className="mt-2 text-gray-500 mx-auto max-w-[530px] text-center">
          Empowering businesses with faster cash access, CASA provides a secure,
          fast, and flexible solution to get early payments for credit card
          sales.
        </p>
    </div>


      {/* Unique Benefits */}


    <div className="flex flex-col md:flex-row justify-center items-center gap-50 mt-15">
        <div className="flex flex-col justify-center items-start gap-4 w-[380px] bg-green-100 rounded-[20px] relative">
            <img className="w-10/12 px-4 mt-6" src="/images/1.png" alt="" />
            <img className="w-11/12 px-4 mb-8" src="/images/2.png" alt="" />
            <img className="absolute bottom-[80px] -right-[160px] w-[200px]" src="/images/pic.png" alt="" />
        </div>
        <div className="flex flex-col justify-center items-start gap-4 w-[380px] bg-gray-100 rounded-[20px]">
            <p className="mt-6 mx-4 text-gray-950 font-semibold text-xl">CASA offers instant, flexible funding directly from card transactions.</p>
            <p className="mx-4 my-2 text-gray-600 text-sm">CASA stands out by offering fast, flexible and transparent funding for business owners 
                who need immediate cash flow from credit card transactions. Here's what makes us unique.</p>
            <h3 className="text-base font-semibold text-gray-700 mx-4"><span className="text-green-800 shadow">✓</span> Instant Cash, No Waiting</h3>
            <h3 className="text-base font-semibold text-gray-700 mx-4"><span className="text-green-800 shadow">✓</span> No Hidden Fees, No Surprises</h3>
            <h3 className="text-base font-semibold text-gray-700 mx-4"><span className="text-green-800 shadow">✓</span> Seamless POS & Payment Processor</h3>
            <h3 className="text-base font-semibold text-gray-700 mx-4"><span className="text-green-800 shadow">✓</span> Secure & Compliant Transactions</h3>
            <button className="p-[6px_20px] mx-4 mt-3 mb-8 bg-green-800 text-white font-semibold rounded-full shadow hover:opacity-80 duration-300 cursor-pointer">Become a Member</button>
        </div>
    </div>

    </section>




    {/* fifth page */}



     <section className="py-20 bg-white px-6 md:px-16">

    <div className="flex flex-col justify-center items-center gap-5">
        <h2 className="text-sm font-semibold text-center text-green-900 bg-green-100 p-[6px_15px] w-[110px] rounded-4xl">Reviews</h2>
        <p className="mt-4 text-4xl font-bold text-gray-900 max-w-[450px] text-center">Hear What Customers Say About CASA!</p>
        <p className="mt-2 text-gray-500 mx-auto max-w-[430px] text-center">
          Trusted by thousands of business owners. See what our satisfied
          customers have to say about CASA.
        </p>
    </div>


      {/* Testimonials */}
      <div className="mt-15 grid md:grid-cols-2 gap-20 max-w-4xl mx-auto">
        <div className="bg-gray-50 shadow rounded-2xl p-8">
            <div className="flex justify-between items-center mb-4">
                <img className="w-[100px]" src="/images/Frame 795.png" alt="" />
                <img className="w-[100px]" src="/images/Other Company.png" alt="" />
            </div>
            <p className="text-2xl font-semibold mb-4">"Game-Changer for My Business!"</p>
            
            <p className="text-base text-gray-800">
                CASA has completely transformed my cash flow. As a restaurant owner,
                waiting for credit card payments used to be a struggle. Now, I get
                my funds within 24 hours, allowing me to pay suppliers and staff on
                time. The process is seamless, and the transparency in pricing is a
                huge plus.
            </p>
            <div className="mt-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full"><img src="/images/Profile image.png" alt="" /></div>
                <div>
                    <h4 className="font-semibold text-gray-900">Michael R.</h4>
                    <p className="text-sm text-gray-600">Restaurant Owner</p>
                </div>
            </div>
        </div>

        <div className="bg-gray-50 shadow rounded-2xl p-8">
            <div className="flex justify-between items-center mb-4">
                <img className="w-[100px]" src="/images/Frame 795.png" alt="" />
                <img className="w-[100px]" src="/images/axway.png" alt="" />
            </div>
            <p className="text-2xl font-semibold mb-4">"Fast, Reliable, and Stress-Free!"</p>
            
            <p className="text-base text-gray-800">
                CASA has given me peace of mind knowing. As a cafe owner I don’t need to wait weeks for cash flow. 
                Within 24 hours,my funds are available, helping me manage operations smoothly.
                The process is seamless, and the transparency in pricing is a
                huge plus.
            </p>
            <div className="mt-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full"><img src="/images/sarah.png" alt="" /></div>
                <div>
                    <h4 className="font-semibold text-gray-900">Sarah M.</h4>
                    <p className="text-sm text-gray-600">Café Owner</p>
                </div>
            </div>
        </div>

      </div>
    </section>



    {/* sixth page */}



    <section className="py-20 bg-gray-50 px-6 md:px-16">

    <div className="flex flex-col justify-center items-center gap-5">
        <h2 className="text-sm font-semibold text-center text-green-900 bg-green-100 p-[6px_15px] w-[110px] rounded-4xl">Pricing</h2>
        <p className="mt-4 text-4xl font-bold text-gray-900 max-w-[450px] text-center">Simple, Transparent Pricing – No Hidden Fees!</p>
        <p className="mt-2 text-gray-500 mx-auto max-w-[430px] text-center">
          Trusted by thousands of business owners. See what our satisfied
          customers have to say about CASA.
        </p>
    </div>


      {/* Pricing Plans */}
    <div className="mt-12 grid md:grid-cols-3 gap-15 max-w-6xl mx-auto">
        {/* Basic Plan */}
        <div className="flex flex-col items-start bg-gray-100 shadow-lg rounded-2xl p-8 text-center hover:shadow-xl transition">
          <h3 className="text-xl font-bold text-gray-700">Basic Plan</h3>
          <p className="mt-2 text-2xl font-semibold text-black inline">2% </p>
          <p className="text-gray-600 inline"> Discount Rate</p>
          <button className="mt-6 w-full py-3 bg-white text-black font-semibold rounded-4xl cursor-pointer hover:opacity-100 transition">Get Started</button>
          <p className="mt-4 text-sm text-gray-500">For businesses processing up to $10,000/month</p>
          <ul className="mt-6 text-left text-gray-700 space-y-2">
            <li>✔ Instant Fund Transfers</li>
            <li>✔ Real-time Transaction Monitoring</li>
            <li>✔ Seamless POS Integration</li>
            <li>✔ 24/7 Customer Support</li>
          </ul>
        </div>

        {/* Enterprise Plan */}
        <div className="flex flex-col items-start bg-green-800 shadow-lg rounded-2xl p-8 text-center hover:shadow-xl scale-105">
          <h3 className="text-xl font-semibold text-white">Enterprise Plan</h3>
          <p className="mt-2 text-2xl font-bold text-white">Custom Rate</p>
          <button className="mt-6 w-full py-3 bg-amber-100 text-black font-semibold rounded-4xl cursor-pointer hover:opacity-100 transition">Get Started</button>
          <p className="mt-4 text-sm text-white">Tailored for high-volume businesses</p> 
          <ul className="mt-6 text-left text-gray-700 bg-white p-4 rounded-2xl text-sm space-y-2">
            <li className="text-black text-base mb-1">What's Included?</li>
            <li>✔ Instant Fund Transfers</li>
            <li>✔ Real-time Transaction Monitoring</li>
            <li>✔ Seamless POS Integration</li>
            <li>✔ 24/7 Customer Support</li>
          </ul>
        </div>

         {/* Growth Plan */}
        <div className="flex flex-col items-start bg-gray-100 shadow-lg rounded-2xl p-8 text-center hover:shadow-xl transition">
          <h3 className="text-xl font-bold text-gray-700">Growth Plan</h3>
          <p className="mt-2 text-2xl font-semibold text-black inline">1.5%</p>
          <p className="text-gray-600 inline">Discount Rate</p>
          <button className="mt-6 w-full py-3 bg-white text-black font-semibold rounded-4xl cursor-pointer hover:opacity-100 transition">Get Started</button>
          <p className="mt-4 text-sm text-gray-500">For businesses processing $10,000 – $50,000/month</p>
          <ul className="mt-6 text-left text-gray-700 space-y-2">
            <li>✔ Instant Fund Transfers</li>
            <li>✔ Real-time Transaction Monitoring</li>
            <li>✔ Seamless POS Integration</li>
            <li>✔ 24/7 Customer Support</li>
          </ul>
        </div>
    </div>
    </section>




    {/* seventh page */}




    <section className="py-20 bg-white px-6 md:px-16">

    <div className="flex flex-col justify-center items-center gap-5">
        <h2 className="text-sm font-semibold text-center text-green-900 bg-green-100 p-[6px_15px] w-[110px] rounded-4xl">Contact</h2>
        <p className="mt-4 text-4xl font-bold text-gray-900 max-w-[480px] text-center">We’re Here to Help – Get in Touch with CASA</p>
        <p className="mt-2 text-gray-600 mx-auto max-w-[430px] text-center">
            Trusted by Thousands of Business Owners See what our satisfied customers have to say about CASA
        </p>
    </div>



    <div className="flex flex-col md:flex-row justify-around items-center mt-10">
        <div className="w-[500px] shadow bg-white">
            <p className="mt-2 text-gray-900 font-semibold text-xl mx-auto max-w-[430px] text-center"> Have Questions? Feel Free to Reach Out!</p>
            <form className="w-full p-4">
                <div className="m-2">
                <label className="block text-gray-700 font-medium mb-2">Name</label>
                <input type="text"placeholder="Your full name"className="w-full px-4 py-3 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
                </div>

                <div className="m-2">
                <label className="block text-gray-700 font-medium mb-2">Email*</label>
                <input type="email"placeholder="Your email"className="w-full px-4 py-3 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
                </div>

                <div className="m-2">
                <label className="block text-gray-700 font-medium mb-2">Business Name</label>
                <input type="text"placeholder="Company name"className="w-full px-4 py-3 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
                </div>

                <div className="m-2">
                <label className="block text-gray-700 font-medium mb-2">Message*</label>
                <textarea placeholder="Write your opinion"className="w-full px-4 py-3 bg-gray-100 border rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-indigo-500"></textarea>
                </div>

                <div className="m-4">
                <button type="submit"className="px-8 py-3 bg-green-800 text-white font-semibold w-full cursor-pointer rounded-full hover:bg-green-600 transition">Send Message</button>
                </div>
            </form>
        </div>


        <div className="w-[450px] bg-gray-50 rounded-[10px]">
            <div className="w-[300px] z-10 ml-[130px] mt-8 mb-2"><img className="w-full" src="/images/form 1.png" alt="" /></div>
            <div className="relative ml-[130px] -top-[120px] right-[40px] z-1 mb-4"><img className="w-[180px]" src="/images/form 2.png" alt="" /></div>
        </div>

    </div>

    </section>



    {/* eight and first half */}



    <section className="mt-12 mb-10">
        <div className="flex justify-center items-center mx-35">
            <div className="flex flex-col justify-center items-center bg-green-800 px-15 py-15 rounded-[15px]">
                <h2 className="text-3xl md:text-4xl font-bold text-white w-[550px] text-center my-4">Unlock Instant Cash Flow for Your Business!</h2>
                <p className="my-4 mx-8 px-20 text-lg md:text-xl text-white text-center">
                    Running a business shouldn’t mean waiting weeks for credit card payments to clear. With CASA, you can convert your daily transactions into instant cash.
                </p>
                <button className="mt-8 px-8 py-3 bg-amber-200 text-green-900 font-semibold cursor-pointer rounded-full hover:bg-gray-100 transition duration-300">Let’s Get Started</button>
            </div>
        </div>
    </section>




    {/* eight and second half */}


    <footer className="text-gray-9500 py-16 px-6 md:px-16">
      <div className="flex flex-col md:flex-row justify-around items-center gap-10">
        {/* About / Description */}
        <div className="w-[300px]">
            <img className="w-[100px] my-4" src="/images/Casa logo.png" alt="" />
           <p className="text-base text-gray-600 mb-4">CASA provides fast, reliable, and transparent factoring services,
                helping business owners turn credit card transactions into instant cash flow.
            </p>
            <p className="font-bold text-xl mb-6">Follow us on</p>
            <div class="flex gap-5 text-xl text-green-800">
                <a href="#" class="hover:opacity-80"><i class="fab fa-facebook"></i></a>
                <a href="#" class="hover:opacity-80"><i class="fab fa-twitter"></i></a>
                <a href="#" class="hover:opacity-80"><i class="fab fa-linkedin"></i></a>
                <a href="#" class="hover:opacity-80"><i class="fab fa-instagram"></i></a>
            </div>

        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-black font-bold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-4 text-sm text-gray-600">
            <li><a href="#" className="hover:text-gray-800 transition">Home</a></li>
            <li><a href="#" className="hover:text-gray-800 transition">About Service</a></li>
            <li><a href="#" className="hover:text-gray-800 transition">Procedure of Service</a></li>
            <li><a href="#" className="hover:text-gray-800 transition">Pricing</a></li>
            <li><a href="#" className="hover:text-gray-800 transition">Why Caca is different</a></li>
            <li><a href="#" className="hover:text-gray-800 transition">Community</a></li>
          </ul>
        </div>

        {/* Support / Contact */}
        <div>
          <h3 className="text-black font-bold text-lg mb-4">Support</h3>
          <ul className="space-y-4 text-gray-600 text-sm">
            <li><a href="#" className="hover:text-gray-800 transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-gray-800 transition">Documentation</a></li>
            <li><a href="#" className="hover:text-gray-800 transition">Community</a></li>
            <li><a href="#" className="hover:text-gray-800 transition">Support Center</a></li>
            <li><a href="#" className="hover:text-gray-800  transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-black font-bold text-lg mb-4">Get in Touch</h3>
          <p className="text-gray-600 font-semibold mb-2"><i class="fas fa-map-marker-alt pr-2 text-black"></i>  Address</p>
          <p>123 Business Street, Suite 500</p>
          <p className="mb-4">New York, NY 10001</p>
          <p className="text-gray-600 font-semibold mb-2"><i class="fas fa-phone pr-2 text-black"></i>  Phone</p>
          <p className="mt-2 mb-4"> 1 (800) 123-4567</p>
          <p className="text-gray-600 font-semibold mb-2"><i class="fas fa-envelope pr-2 text-black"></i>  Email</p>
          <p> support@casa.finance</p>
        </div>
      </div>

      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm flex justify-between items-center">
        <div className="pl-4">&copy; 2025 CASA. All rights reserved. </div>
        <div className="pr-4">Privacy &nbsp;|&nbsp; Security &nbsp;|&nbsp; Terms</div>
      </div>
    </footer>


    </div>
  );
}

export default HeroDashboard;
