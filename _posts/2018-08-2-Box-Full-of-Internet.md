
<img src="https://raw.githubusercontent.com/samiul-hoque/samiul-hoque.github.io/master/img/internetbox/heroImage.png" alt="WiFi Picchi hero image" width="800px">


The Internet box is one of my ongoing projects. The aim of the project is to provide internet to the dense slum areas of Bangladesh. I’ve been working on the project since mid 2018 with my partners Mainul Hasan Alin and Malinda Senanayeke.


Bangladesh is one of the most densely populated countries while it’s capital, Dhaka is the third most populous city in the world with a population density of 59,595 per sq. mile. The sheer number of people make it very difficult for its resident to get access to basic amenities, let alone proper high speed internet. 

Mobile internet is the primary access to the web for most of the people here, while they remain quite expensive compared to the GDP here. Even after paying a lot for data packs, the abysmal internet speeds due to the density of mobile devices makes it quite impossible to work with.

<img src="https://raw.githubusercontent.com/samiul-hoque/samiul-hoque.github.io/master/img/internetbox/density.png" alt="Tea Store crowd"  width="800px">

Life here moves around the tea stalls. In most slum areas, the tea stores are public gathering spots where they watch TV, interact and talk over a sip of tea. Tea stalls are always densely packed, with foot traffic reaching over  1,000 easily on an average sized tea store.
  

Our goal is to provide internet using Wi-Fi Hotspots to local communities at tea stores while making the setup sustainable to the tea stall owners.

<hr>

## Business Model:
Our business model operates on 2 entities and it was developed throughout the pilot project. We are currently running this setup for data collection to collect some funding.

Vendor:
+ A vendor asks us to set up a hotspot at their shop. The vendor, in our case is the tea stall owner.
+ We set up the internet connection from any local third party ISP using the vendor’s ID and give him a router.
+ The vendor gets free Wi-Fi for his devices (up to 2 devices), in which most cases are a TV and his personal phone.
+ The router broadcasts a public Wife Hotspot.
+ Maintenance on the router is done by us, in case of technical difficulties while the ISP and the vendor maintain the internet connection and power issues.
+ The vendor will pay the internet and power by selling coupons. We take a 40% cut on each coupon.

Customer:
+ A customer will come in to the shop and buy tokens from the vendor.
+ The customer can connect to the open hotspot and enter his 4 digit coupon to get access to unlimited high speed internet for 3 hours at any of our hotspots.

<hr>

## The Proof of Concept:
To test out if the idea works, we started with hacking cheap routers and installing openWRT on them. Routers with built in captive portal support are available in the market but the price range usually starts from BDT 10,000. Our plan was to get the full setup cost under BDT 5000, or else it would make it very difficult to break even. Besides, we were all quite broke :|

We started with Xiaomi Router 3, as it had the most available onboard RAM and a good Wi-Fi chipset. But sadly, it did not get an official opnWRT image.
<br>
<img src="https://raw.githubusercontent.com/samiul-hoque/samiul-hoque.github.io/master/img/internetbox/miRouterExperiment.png" alt="Mi Router 3 hack" width="800">
<br>
 Due to various performance issues we later stuck with the TP-Link MR3420. Which was priced at BDT 2000.
<br>
<img src="https://raw.githubusercontent.com/samiul-hoque/samiul-hoque.github.io/master/img/internetbox/tplink-mr3420.png" alt="TP-Link MR3420 hack" width="800">
<br>
For the captive portal we used coova-chilli. An opensource captive portal supported by openWRT. For the user authentication server, we used radius. The idea was to host the AAA server centrally so our users could use any of our hotspots for connectivity. Basically it’s like roaming turned on for Wi-Fi Hotspots.  After testing the captive portal, we decided on giving it a fancy enclosure. We were planning to provide internet to slum dwellers, for whom an outlook other than some antennas and wires are quite important. So I designed a prototype box using PVC as material and named it ‘Premium WiFi’ we were ready to launch. 
We set up our first box at Tarunno’s café, a coffee shop just below my home. As it was for testing purposes, we tried to get it as close as possible to our workplace, which sadly was my room for the time being.
<br>
<img src="https://raw.githubusercontent.com/samiul-hoque/samiul-hoque.github.io/master/img/internetbox/first%20prototype1.jpg.png" alt="First run" width="800px"><br>

At the first test we found multiple problems without set up. We found that users were finding the captive portals difficult to use. Some phones handled the spash screen differently. Our initial tokens were 8 character long with an alphanumeric character. We had to bring it down to 4 digit numeric eventually and then finally at 6 digit numeric. There were some issues with downtime and range. We also found a bug that reset the router once every week or so. Reset as in, even the firmware gets corrupted and we had to write everything in again. Later we found it to be a heating issue which was solved by putting in a heatsink on the Wi-Fi chipset. After a few weeks of testing out, we started scouting for places to run our pilot project.

<hr>

## The Pilot Project

For our pilot project, we selected three tea stalls at the Korail Slums situated in Mohakhali, Dhaka as our vendors. For the initial three we helped them get the internet connection to their location, as these slums are pretty much disconnected from any sort of modern day amenities. We had to route optical fiber cables there ourselves. 
<br>
<img src="https://raw.githubusercontent.com/samiul-hoque/samiul-hoque.github.io/master/img/internetbox/internetman.jpg" alt="Internet man" width="800" length="800">
<br>
After about a week of deliberation, we finally had three working nodes with 10mbps Internet connectivity with a monthly bill of 1500tk. 

I made another version of the box with plywood and “Internet” written on in Bengali. 
<br>
<img src="https://raw.githubusercontent.com/samiul-hoque/samiul-hoque.github.io/master/img/internetbox/prototype%202.jpg" alt="Second Prototype" width="800" length="800">
<br>
<br>
<img src="https://raw.githubusercontent.com/samiul-hoque/samiul-hoque.github.io/master/img/internetbox/second%20prototype3.jpg" alt="Second prototype 2" width="800" length="800">
<br>

Before designing the data packs, we tried talking to our user base about their current access to the internet. Not surprisingly, by internet most of the average users only know of Facebook. To them Facebook is the internet and the unit of expense for internet was ‘MB’. The story behind the ‘MB’ unit can be explained only by knowing a bit detail about the Mobile operator’s data packages. Here in Bangladesh, internet is sold by MB with a time validity to it. When we tried to explain unlimited internet, it was quite unconceivable for most of them. 
<br>
<img src="https://raw.githubusercontent.com/samiul-hoque/samiul-hoque.github.io/master/img/internetbox/GP%20price%20chart.png" alt="GP Price chart" width="800" length="800">
<br>



Our first data pack was 350MB for 5tk. The data pack was selected from a popularity vote with the customers at the tea store. They were very happy to know that they could get 350MB for just two taka with a whole day of validity. 
<br>
<img src="https://raw.githubusercontent.com/samiul-hoque/samiul-hoque.github.io/master/img/internetbox/token.png" alt="token" width="800" length="800">
<br>




On our first day of operation, disaster strikes. No user could use internet through the data packs. We checked our backend and it was showing the users consumed the data packs, while the users couldn’t even connect to the internet. As soon as they would put in the Wi-Fi coupon, the phone would freeze and all 500mb would be consumed. After pulling our hair out for a few hours we discovered that none of these phones ever connected to Wi-Fi before. As soon as they connect, there’s tons of updates ready to be downloaded and that’s where the consumption was going.
After that fiasco, we came up with the current coupon model of 5tk of unlimited internet for 3 hours. Our pilot project was finally running successfully without any major hiccups. 

We took some feedback from the customers and decided to paint the boxes Bright Yellow and Blue.  
<br>
<img src="https://raw.githubusercontent.com/samiul-hoque/samiul-hoque.github.io/master/img/internetbox/PaintingTheBox.jpg" alt="Painting boxes" width="800" length="800">
<br>
<br>
<img src="https://raw.githubusercontent.com/samiul-hoque/samiul-hoque.github.io/master/img/internetbox/thirdprototype.jpg" alt="Painting boxes" width="800" length="800">
<br>
<hr>

Here’s some photos of our shops: 

<br>
<img src="https://raw.githubusercontent.com/samiul-hoque/samiul-hoque.github.io/master/img/internetbox/teashop.png" alt="" width="800" length="800">
<br>
<br>
<img src="https://raw.githubusercontent.com/samiul-hoque/samiul-hoque.github.io/master/img/internetbox/third%20prototype1.jpg" alt="" width="800" length="800">
<br>
<br>
<img src="https://raw.githubusercontent.com/samiul-hoque/samiul-hoque.github.io/master/img/internetbox/third%20prototype3.jpg" alt="" width="800" length="800">
<br>
<br>
<img src="https://raw.githubusercontent.com/samiul-hoque/samiul-hoque.github.io/master/img/internetbox/third%20prototype4.jpg" alt="" width="800" length="800">
<br>
<br>
<img src="https://raw.githubusercontent.com/samiul-hoque/samiul-hoque.github.io/master/img/internetbox/new%20shop.jpg" alt="" width="800" length="800">
<br>
<br>
<img src="https://raw.githubusercontent.com/samiul-hoque/samiul-hoque.github.io/master/img/internetbox/third%20prototype2.jpg" alt="" width="800" length="800">
<br>

<hr>

## Milestones Reached

+ 900 unique users reached, on our 4 nodes. Considering unique mac IDs.
+ Average consumption of data is 684 MB download, 27 MB upload.
+ Total Data consumed after setting up the four nodes is 5088 GB.
+ Assuming the minimum price of 1 GB data from the telcos as 100tk, that’s about 610,560 BDT of data consumed by the users.
+ We soled about 7000 5tk unlimited tokens, which is about 17 times cheaper than the average telcos and 94% of the price was slashed.

<hr>
We also attended SANOG32 and BDNog for getting acquainted with the internet community in Dhaka. I ended up taking an IPv6 workshop under Dr. Philip Smith. Also took a small introductory workshop on IoT featuring PyCom development boards and micro python. The next day was all about server hardening on FreeBSD. 

<br>
<img src="https://raw.githubusercontent.com/samiul-hoque/samiul-hoque.github.io/master/img/sanog32/wifipicchi.jpg" alt="SANOG32" width="800" length="800">
<br>
<hr>

Before coming to Ahmedabad for my Fab Academy course, we partnered up with a wood factory to make 10 of these boxes as a preparation to make them in bulk.

<br>
<img src="https://raw.githubusercontent.com/samiul-hoque/samiul-hoque.github.io/master/img/internetbox/box.jpg" alt="SANOG32" width="800" length="800">
<br>
<hr>


