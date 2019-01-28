
<img src="https://raw.githubusercontent.com/samiul-hoque/samiul-hoque.github.io/master/img/internetbox/heroImage.png" alt="WiFi Picchi hero image" width="70%">


The Internet box is one of my ongoing projects. The aim of the project is to provide internet to the dense slum areas of Bangladesh. I’ve been working on the project since mid 2018 with my partners Mainul Hasan Alin and Malinda Senanayeke.


Bangladesh is one of the most densely populated countries while it’s capital, Dhaka is the third most populous city in the world with a population density of 59,595 per sq. mile. The sheer number of people make it very difficult for its resident to get access to basic amenities, let alone proper high speed internet. 

Mobile internet is the primary access to the web for most of the people here, while they remain quite expensive compared to the GDP here. Even after paying a lot for data packs, the abysmal internet speeds due to the density of mobile devices makes it quite impossible to work with.

<img src="https://raw.githubusercontent.com/samiul-hoque/samiul-hoque.github.io/master/img/internetbox/density.png" alt="Tea Store crowd"  width="400px"/>

Life here moves around the tea stalls. In most slum areas, the tea stores are public gathering spots where they watch TV, interact and talk over a sip of tea. Tea stalls are always densely packed, with foot traffic reaching over  1,000 easily on an average sized tea store.
  

Our goal is to provide internet using Wi-Fi Hotspots to local communities at tea stores while making the setup sustainable to the tea stall owners.

<br><br/>

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

==========

## The Proof of Concept:
To test out if the idea works, we started with hacking cheap routers and installing openWRT on them. Routers with built in captive portal support are available in the market but the price range usually starts from BDT 10,000. Our plan was to get the full setup cost under BDT 5000, or else it would make it very difficult to break even. Besides, we were all quite broke :|

We started with Xiaomi Router 3, as it had the most available onboard RAM and a good Wi-Fi chipset. But sadly, it did not get an official opnWRT image.<img src="https://raw.githubusercontent.com/samiul-hoque/samiul-hoque.github.io/master/img/internetbox/miRouterExperiment.png" alt="Mi Router 3 hack" width="1600">
 Due to various performance issues we later stuck with the TP-Link MR3420. Which was priced at BDT 2000.
<img src="https://raw.githubusercontent.com/samiul-hoque/samiul-hoque.github.io/master/img/internetbox/tplink-mr3420.png" alt="TP-Link MR3420 hack" width="1600">

For the captive portal we used coova-chilli. An opensource captive portal supported by openWRT. For the user authentication server, we used radius. The idea was to host the AAA server centrally so our users could use any of our hotspots for connectivity. Basically it’s like roaming turned on for Wi-Fi Hotspots.  After testing the captive portal, we decided on giving it a fancy enclosure. We were planning to provide internet to slum dwellers, for whom an outlook other than some antennas and wires are quite important. So I designed a prototype box using PVC as material and named it ‘Premium WiFi’ we were ready to launch. 
We set up our first box at Tarunno’s café, a coffee shop just below my home. As it was for testing purposes, we tried to get it as close as possible to our workplace, which sadly was my room for the time being.

At the first test we found multiple problems without set up. We found that users were finding the captive portals difficult to use. Some phones handled the spash screen differently. Our initial tokens were 8 character long with an alphanumeric character. We had to bring it down to 4 digit numeric eventually and then finally at 6 digit numeric. There were some issues with downtime and range. We also found a bug that reset the router once every week or so. Reset as in, even the firmware gets corrupted and we had to write everything in again. Later we found it to be a heating issue which was solved by putting in a heatsink on the Wi-Fi chipset. After a few weeks of testing out, we started scouting for places to run our pilot project.

<style type="text/css">
.image-left {
  display: block;
  margin-left: auto;
  margin-right: auto;
  float: right;
}

