import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})

export class DataTableComponent implements OnInit {
  rows: Array<any> = [{ 'id': 1, 'first_name': 'Wanda', 'last_name': 'Morales', 'email': 'wmorales0@e-recht24.de', 'gender': 'Female', 'ip_address': '168.21.40.204' },
  { 'id': 2, 'first_name': 'Virginia', 'last_name': 'Lee', 'email': 'vlee1@ibm.com', 'gender': 'Female', 'ip_address': '90.117.10.246' },
  { 'id': 3, 'first_name': 'Walter', 'last_name': 'Carpenter', 'email': 'wcarpenter2@ebay.com', 'gender': 'Male', 'ip_address': '97.160.58.66' },
  { 'id': 4, 'first_name': 'Paul', 'last_name': 'Wright', 'email': 'pwright3@xing.com', 'gender': 'Male', 'ip_address': '61.255.55.229' },
  { 'id': 5, 'first_name': 'Howard', 'last_name': 'Mccoy', 'email': 'hmccoy4@joomla.org', 'gender': 'Male', 'ip_address': '151.114.73.186' },
  { 'id': 6, 'first_name': 'Betty', 'last_name': 'Washington', 'email': 'bwashington5@slideshare.net', 'gender': 'Female', 'ip_address': '216.134.10.250' },
  { 'id': 7, 'first_name': 'Emily', 'last_name': 'Alvarez', 'email': 'ealvarez6@usgs.gov', 'gender': 'Female', 'ip_address': '5.101.158.126' },
  { 'id': 8, 'first_name': 'Roger', 'last_name': 'Young', 'email': 'ryoung7@goo.gl', 'gender': 'Male', 'ip_address': '147.16.89.139' },
  { 'id': 9, 'first_name': 'Dorothy', 'last_name': 'Chapman', 'email': 'dchapman8@goo.gl', 'gender': 'Female', 'ip_address': '155.51.190.141' },
  { 'id': 10, 'first_name': 'Elizabeth', 'last_name': 'Snyder', 'email': 'esnyder9@squarespace.com', 'gender': 'Female', 'ip_address': '9.65.232.92' },
  { 'id': 11, 'first_name': 'Debra', 'last_name': 'Hunt', 'email': 'dhunta@instagram.com', 'gender': 'Female', 'ip_address': '170.118.88.147' },
  { 'id': 12, 'first_name': 'Marie', 'last_name': 'Reid', 'email': 'mreidb@newyorker.com', 'gender': 'Female', 'ip_address': '46.197.38.9' },
  { 'id': 13, 'first_name': 'Barbara', 'last_name': 'Perry', 'email': 'bperryc@craigslist.org', 'gender': 'Female', 'ip_address': '6.224.17.50' },
  { 'id': 14, 'first_name': 'Shawn', 'last_name': 'James', 'email': 'sjamesd@bigcartel.com', 'gender': 'Male', 'ip_address': '85.93.94.196' },
  { 'id': 15, 'first_name': 'Diane', 'last_name': 'Diaz', 'email': 'ddiaze@freewebs.com', 'gender': 'Female', 'ip_address': '154.23.44.153' },
  { 'id': 16, 'first_name': 'Ronald', 'last_name': 'Green', 'email': 'rgreenf@networksolutions.com', 'gender': 'Male', 'ip_address': '228.241.166.53' },
  { 'id': 17, 'first_name': 'Judy', 'last_name': 'Williamson', 'email': 'jwilliamsong@t.co', 'gender': 'Female', 'ip_address': '51.190.50.15' },
  { 'id': 18, 'first_name': 'Raymond', 'last_name': 'Montgomery', 'email': 'rmontgomeryh@123-reg.co.uk', 'gender': 'Male', 'ip_address': '224.24.79.37' },
  { 'id': 19, 'first_name': 'Cynthia', 'last_name': 'Freeman', 'email': 'cfreemani@hao123.com', 'gender': 'Female', 'ip_address': '32.148.89.128' },
  { 'id': 20, 'first_name': 'Martin', 'last_name': 'Thomas', 'email': 'mthomasj@oakley.com', 'gender': 'Male', 'ip_address': '146.109.212.44' },
  { 'id': 21, 'first_name': 'Billy', 'last_name': 'Hamilton', 'email': 'bhamiltonk@mediafire.com', 'gender': 'Male', 'ip_address': '59.236.205.163' },
  { 'id': 22, 'first_name': 'Carol', 'last_name': 'Bishop', 'email': 'cbishopl@engadget.com', 'gender': 'Female', 'ip_address': '49.192.189.216' },
  { 'id': 23, 'first_name': 'Karen', 'last_name': 'Reyes', 'email': 'kreyesm@mayoclinic.com', 'gender': 'Female', 'ip_address': '14.87.101.149' },
  { 'id': 24, 'first_name': 'Michelle', 'last_name': 'Ray', 'email': 'mrayn@goodreads.com', 'gender': 'Female', 'ip_address': '149.205.171.131' },
  { 'id': 25, 'first_name': 'Frances', 'last_name': 'Reyes', 'email': 'freyeso@infoseek.co.jp', 'gender': 'Female', 'ip_address': '45.135.185.116' },
  { 'id': 26, 'first_name': 'Tammy', 'last_name': 'Myers', 'email': 'tmyersp@cnn.com', 'gender': 'Female', 'ip_address': '91.147.190.53' },
  { 'id': 27, 'first_name': 'Kelly', 'last_name': 'Bell', 'email': 'kbellq@bing.com', 'gender': 'Female', 'ip_address': '54.220.194.151' },
  { 'id': 28, 'first_name': 'Daniel', 'last_name': 'Clark', 'email': 'dclarkr@hubpages.com', 'gender': 'Male', 'ip_address': '83.50.123.102' },
  { 'id': 29, 'first_name': 'Janice', 'last_name': 'Smith', 'email': 'jsmiths@paginegialle.it', 'gender': 'Female', 'ip_address': '34.159.96.91' },
  { 'id': 30, 'first_name': 'Eugene', 'last_name': 'Stanley', 'email': 'estanleyt@sciencedirect.com', 'gender': 'Male', 'ip_address': '88.41.130.204' },
  { 'id': 31, 'first_name': 'Russell', 'last_name': 'White', 'email': 'rwhiteu@ow.ly', 'gender': 'Male', 'ip_address': '156.10.93.104' },
  { 'id': 32, 'first_name': 'Henry', 'last_name': 'Gardner', 'email': 'hgardnerv@zimbio.com', 'gender': 'Male', 'ip_address': '103.62.87.236' },
  { 'id': 33, 'first_name': 'Brenda', 'last_name': 'Johnston', 'email': 'bjohnstonw@canalblog.com', 'gender': 'Female', 'ip_address': '5.18.75.30' },
  { 'id': 34, 'first_name': 'Amy', 'last_name': 'Kelley', 'email': 'akelleyx@examiner.com', 'gender': 'Female', 'ip_address': '0.95.163.249' },
  { 'id': 35, 'first_name': 'Jennifer', 'last_name': 'Ortiz', 'email': 'jortizy@miitbeian.gov.cn', 'gender': 'Female', 'ip_address': '103.71.92.215' },
  { 'id': 36, 'first_name': 'Arthur', 'last_name': 'Scott', 'email': 'ascottz@shop-pro.jp', 'gender': 'Male', 'ip_address': '28.247.188.106' },
  { 'id': 37, 'first_name': 'Russell', 'last_name': 'Russell', 'email': 'rrussell10@mozilla.org', 'gender': 'Male', 'ip_address': '249.133.170.175' },
  { 'id': 38, 'first_name': 'Aaron', 'last_name': 'Bradley', 'email': 'abradley11@cloudflare.com', 'gender': 'Male', 'ip_address': '32.225.145.246' },
  { 'id': 39, 'first_name': 'Diana', 'last_name': 'Barnes', 'email': 'dbarnes12@gravatar.com', 'gender': 'Female', 'ip_address': '194.187.94.136' },
  { 'id': 40, 'first_name': 'Joyce', 'last_name': 'Carter', 'email': 'jcarter13@biglobe.ne.jp', 'gender': 'Female', 'ip_address': '153.91.22.4' },
  { 'id': 41, 'first_name': 'Louis', 'last_name': 'Riley', 'email': 'lriley14@imgur.com', 'gender': 'Male', 'ip_address': '239.180.125.69' },
  { 'id': 42, 'first_name': 'Paul', 'last_name': 'Thomas', 'email': 'pthomas15@plala.or.jp', 'gender': 'Male', 'ip_address': '255.73.73.234' },
  { 'id': 43, 'first_name': 'Jane', 'last_name': 'Fox', 'email': 'jfox16@histats.com', 'gender': 'Female', 'ip_address': '138.168.95.241' },
  { 'id': 44, 'first_name': 'Keith', 'last_name': 'Allen', 'email': 'kallen17@spotify.com', 'gender': 'Male', 'ip_address': '158.42.12.158' },
  { 'id': 45, 'first_name': 'Kelly', 'last_name': 'Reynolds', 'email': 'kreynolds18@goo.gl', 'gender': 'Female', 'ip_address': '40.175.106.254' },
  { 'id': 46, 'first_name': 'Alan', 'last_name': 'Jenkins', 'email': 'ajenkins19@ucsd.edu', 'gender': 'Male', 'ip_address': '60.22.29.52' },
  { 'id': 47, 'first_name': 'Harry', 'last_name': 'Ryan', 'email': 'hryan1a@usda.gov', 'gender': 'Male', 'ip_address': '86.159.56.143' },
  { 'id': 48, 'first_name': 'Jennifer', 'last_name': 'Daniels', 'email': 'jdaniels1b@spotify.com', 'gender': 'Female', 'ip_address': '241.48.73.173' },
  { 'id': 49, 'first_name': 'Amy', 'last_name': 'Lawrence', 'email': 'alawrence1c@flickr.com', 'gender': 'Female', 'ip_address': '78.154.117.254' },
  { 'id': 50, 'first_name': 'Larry', 'last_name': 'Reynolds', 'email': 'lreynolds1d@google.pl', 'gender': 'Male', 'ip_address': '187.141.85.38' },
  { 'id': 51, 'first_name': 'Gregory', 'last_name': 'Richards', 'email': 'grichards1e@cornell.edu', 'gender': 'Male', 'ip_address': '203.10.6.79' },
  { 'id': 52, 'first_name': 'Jason', 'last_name': 'Riley', 'email': 'jriley1f@lulu.com', 'gender': 'Male', 'ip_address': '158.239.79.199' },
  { 'id': 53, 'first_name': 'Lori', 'last_name': 'Howard', 'email': 'lhoward1g@vk.com', 'gender': 'Female', 'ip_address': '33.103.36.95' },
  { 'id': 54, 'first_name': 'Benjamin', 'last_name': 'Mitchell', 'email': 'bmitchell1h@posterous.com', 'gender': 'Male', 'ip_address': '147.136.127.210' },
  { 'id': 55, 'first_name': 'Harold', 'last_name': 'Bowman', 'email': 'hbowman1i@naver.com', 'gender': 'Male', 'ip_address': '78.250.69.198' },
  { 'id': 56, 'first_name': 'Edward', 'last_name': 'Scott', 'email': 'escott1j@bloglovin.com', 'gender': 'Male', 'ip_address': '43.209.160.14' },
  { 'id': 57, 'first_name': 'Steve', 'last_name': 'Dixon', 'email': 'sdixon1k@yellowpages.com', 'gender': 'Male', 'ip_address': '244.165.148.27' },
  { 'id': 58, 'first_name': 'Christine', 'last_name': 'Johnston', 'email': 'cjohnston1l@oaic.gov.au', 'gender': 'Female', 'ip_address': '197.32.176.247' },
  { 'id': 59, 'first_name': 'Gloria', 'last_name': 'Evans', 'email': 'gevans1m@huffingtonpost.com', 'gender': 'Female', 'ip_address': '157.145.74.216' },
  { 'id': 60, 'first_name': 'Barbara', 'last_name': 'West', 'email': 'bwest1n@webeden.co.uk', 'gender': 'Female', 'ip_address': '4.166.112.33' },
  { 'id': 61, 'first_name': 'Sarah', 'last_name': 'Carr', 'email': 'scarr1o@time.com', 'gender': 'Female', 'ip_address': '211.95.55.65' },
  { 'id': 62, 'first_name': 'Bonnie', 'last_name': 'Day', 'email': 'bday1p@instagram.com', 'gender': 'Female', 'ip_address': '80.218.240.4' },
  { 'id': 63, 'first_name': 'Brian', 'last_name': 'Diaz', 'email': 'bdiaz1q@smugmug.com', 'gender': 'Male', 'ip_address': '90.200.172.107' },
  { 'id': 64, 'first_name': 'Terry', 'last_name': 'Murray', 'email': 'tmurray1r@mit.edu', 'gender': 'Male', 'ip_address': '195.222.67.121' },
  { 'id': 65, 'first_name': 'Ashley', 'last_name': 'Clark', 'email': 'aclark1s@wp.com', 'gender': 'Female', 'ip_address': '11.202.106.246' },
  { 'id': 66, 'first_name': 'Edward', 'last_name': 'Hansen', 'email': 'ehansen1t@webnode.com', 'gender': 'Male', 'ip_address': '245.214.31.27' },
  { 'id': 67, 'first_name': 'Carl', 'last_name': 'Wagner', 'email': 'cwagner1u@webeden.co.uk', 'gender': 'Male', 'ip_address': '48.76.229.6' },
  { 'id': 68, 'first_name': 'Nicole', 'last_name': 'Holmes', 'email': 'nholmes1v@pen.io', 'gender': 'Female', 'ip_address': '81.149.40.10' },
  { 'id': 69, 'first_name': 'Willie', 'last_name': 'Collins', 'email': 'wcollins1w@multiply.com', 'gender': 'Male', 'ip_address': '77.124.112.40' },
  { 'id': 70, 'first_name': 'Jonathan', 'last_name': 'Welch', 'email': 'jwelch1x@aboutads.info', 'gender': 'Male', 'ip_address': '122.155.61.193' },
  { 'id': 71, 'first_name': 'Barbara', 'last_name': 'White', 'email': 'bwhite1y@apple.com', 'gender': 'Female', 'ip_address': '30.172.169.65' },
  { 'id': 72, 'first_name': 'Martin', 'last_name': 'Wheeler', 'email': 'mwheeler1z@indiatimes.com', 'gender': 'Male', 'ip_address': '194.9.139.145' },
  { 'id': 73, 'first_name': 'Bruce', 'last_name': 'Richards', 'email': 'brichards20@theglobeandmail.com', 'gender': 'Male', 'ip_address': '11.153.140.104' },
  { 'id': 74, 'first_name': 'Chris', 'last_name': 'Peters', 'email': 'cpeters21@state.gov', 'gender': 'Male', 'ip_address': '142.94.0.72' },
  { 'id': 75, 'first_name': 'Donald', 'last_name': 'Hunt', 'email': 'dhunt22@oakley.com', 'gender': 'Male', 'ip_address': '163.37.197.131' },
  { 'id': 76, 'first_name': 'Anne', 'last_name': 'Duncan', 'email': 'aduncan23@mapy.cz', 'gender': 'Female', 'ip_address': '217.153.169.20' },
  { 'id': 77, 'first_name': 'Anthony', 'last_name': 'Ellis', 'email': 'aellis24@typepad.com', 'gender': 'Male', 'ip_address': '42.229.63.244' },
  { 'id': 78, 'first_name': 'Maria', 'last_name': 'Ramos', 'email': 'mramos25@ihg.com', 'gender': 'Female', 'ip_address': '193.143.252.130' },
  { 'id': 79, 'first_name': 'Ralph', 'last_name': 'Miller', 'email': 'rmiller26@cnbc.com', 'gender': 'Male', 'ip_address': '69.199.168.9' },
  { 'id': 80, 'first_name': 'Janice', 'last_name': 'Sanders', 'email': 'jsanders27@fema.gov', 'gender': 'Female', 'ip_address': '251.235.183.24' },
  { 'id': 81, 'first_name': 'Tammy', 'last_name': 'Henry', 'email': 'thenry28@noaa.gov', 'gender': 'Female', 'ip_address': '172.206.18.86' },
  { 'id': 82, 'first_name': 'Kathy', 'last_name': 'Burns', 'email': 'kburns29@mayoclinic.com', 'gender': 'Female', 'ip_address': '41.249.94.64' },
  { 'id': 83, 'first_name': 'Carol', 'last_name': 'Martinez', 'email': 'cmartinez2a@yellowbook.com', 'gender': 'Female', 'ip_address': '101.104.65.164' },
  { 'id': 84, 'first_name': 'Jacqueline', 'last_name': 'Jenkins', 'email': 'jjenkins2b@cbslocal.com', 'gender': 'Female', 'ip_address': '162.24.92.65' },
  { 'id': 85, 'first_name': 'Teresa', 'last_name': 'Hart', 'email': 'thart2c@yelp.com', 'gender': 'Female', 'ip_address': '146.23.116.148' },
  { 'id': 86, 'first_name': 'Amanda', 'last_name': 'Banks', 'email': 'abanks2d@aol.com', 'gender': 'Female', 'ip_address': '222.62.251.228' },
  { 'id': 87, 'first_name': 'Martin', 'last_name': 'Roberts', 'email': 'mroberts2e@mozilla.com', 'gender': 'Male', 'ip_address': '199.130.162.81' },
  { 'id': 88, 'first_name': 'Thomas', 'last_name': 'Gonzales', 'email': 'tgonzales2f@tripadvisor.com', 'gender': 'Male', 'ip_address': '172.43.195.231' },
  { 'id': 89, 'first_name': 'Amanda', 'last_name': 'Knight', 'email': 'aknight2g@seattletimes.com', 'gender': 'Female', 'ip_address': '197.115.61.85' },
  { 'id': 90, 'first_name': 'Gregory', 'last_name': 'Carr', 'email': 'gcarr2h@nationalgeographic.com', 'gender': 'Male', 'ip_address': '104.38.38.230' },
  { 'id': 91, 'first_name': 'Eric', 'last_name': 'Baker', 'email': 'ebaker2i@si.edu', 'gender': 'Male', 'ip_address': '229.80.219.167' },
  { 'id': 92, 'first_name': 'Melissa', 'last_name': 'Bell', 'email': 'mbell2j@youtube.com', 'gender': 'Female', 'ip_address': '69.133.58.216' },
  { 'id': 93, 'first_name': 'Philip', 'last_name': 'Burton', 'email': 'pburton2k@wiley.com', 'gender': 'Male', 'ip_address': '206.62.126.90' },
  { 'id': 94, 'first_name': 'Janet', 'last_name': 'Robertson', 'email': 'jrobertson2l@joomla.org', 'gender': 'Female', 'ip_address': '147.136.86.245' },
  { 'id': 95, 'first_name': 'Jeffrey', 'last_name': 'Welch', 'email': 'jwelch2m@independent.co.uk', 'gender': 'Male', 'ip_address': '191.117.9.137' },
  { 'id': 96, 'first_name': 'Stephanie', 'last_name': 'Phillips', 'email': 'sphillips2n@blog.com', 'gender': 'Female', 'ip_address': '252.78.147.186' },
  { 'id': 97, 'first_name': 'Rachel', 'last_name': 'Cooper', 'email': 'rcooper2o@va.gov', 'gender': 'Female', 'ip_address': '20.194.199.45' },
  { 'id': 98, 'first_name': 'Tina', 'last_name': 'Moreno', 'email': 'tmoreno2p@timesonline.co.uk', 'gender': 'Female', 'ip_address': '130.37.220.70' },
  { 'id': 99, 'first_name': 'Doris', 'last_name': 'Wilson', 'email': 'dwilson2q@indiatimes.com', 'gender': 'Female', 'ip_address': '229.150.75.244' },
  { 'id': 100, 'first_name': 'Bobby', 'last_name': 'Hanson', 'email': 'bhanson2r@omniture.com', 'gender': 'Male', 'ip_address': '53.228.197.159' },
  { 'id': 101, 'first_name': 'Willie', 'last_name': 'James', 'email': 'wjames2s@slate.com', 'gender': 'Male', 'ip_address': '248.167.217.181' },
  { 'id': 102, 'first_name': 'Jimmy', 'last_name': 'Ferguson', 'email': 'jferguson2t@ustream.tv', 'gender': 'Male', 'ip_address': '13.131.53.174' },
  { 'id': 103, 'first_name': 'Michelle', 'last_name': 'Richardson', 'email': 'mrichardson2u@pbs.org', 'gender': 'Female', 'ip_address': '116.222.153.228' },
  { 'id': 104, 'first_name': 'Adam', 'last_name': 'Edwards', 'email': 'aedwards2v@dailymotion.com', 'gender': 'Male', 'ip_address': '106.189.198.48' },
  { 'id': 105, 'first_name': 'Donald', 'last_name': 'Freeman', 'email': 'dfreeman2w@cdbaby.com', 'gender': 'Male', 'ip_address': '147.165.195.149' },
  { 'id': 106, 'first_name': 'Donald', 'last_name': 'Gray', 'email': 'dgray2x@usa.gov', 'gender': 'Male', 'ip_address': '206.56.13.143' },
  { 'id': 107, 'first_name': 'Billy', 'last_name': 'Sanders', 'email': 'bsanders2y@netlog.com', 'gender': 'Male', 'ip_address': '55.18.151.218' },
  { 'id': 108, 'first_name': 'Jeffrey', 'last_name': 'Hill', 'email': 'jhill2z@themeforest.net', 'gender': 'Male', 'ip_address': '142.182.89.235' },
  { 'id': 109, 'first_name': 'Diana', 'last_name': 'Bishop', 'email': 'dbishop30@admin.ch', 'gender': 'Female', 'ip_address': '26.33.173.97' },
  { 'id': 110, 'first_name': 'Russell', 'last_name': 'Wheeler', 'email': 'rwheeler31@wp.com', 'gender': 'Male', 'ip_address': '121.191.79.42' },
  { 'id': 111, 'first_name': 'Marilyn', 'last_name': 'Alvarez', 'email': 'malvarez32@soup.io', 'gender': 'Female', 'ip_address': '82.0.126.132' },
  { 'id': 112, 'first_name': 'Jeremy', 'last_name': 'Gonzales', 'email': 'jgonzales33@ucsd.edu', 'gender': 'Male', 'ip_address': '93.151.58.161' },
  { 'id': 113, 'first_name': 'Irene', 'last_name': 'Hart', 'email': 'ihart34@hugedomains.com', 'gender': 'Female', 'ip_address': '158.175.207.205' },
  { 'id': 114, 'first_name': 'Joseph', 'last_name': 'Myers', 'email': 'jmyers35@goo.ne.jp', 'gender': 'Male', 'ip_address': '148.114.46.247' },
  { 'id': 115, 'first_name': 'Timothy', 'last_name': 'Brown', 'email': 'tbrown36@adobe.com', 'gender': 'Male', 'ip_address': '153.180.236.34' },
  { 'id': 116, 'first_name': 'Aaron', 'last_name': 'Rogers', 'email': 'arogers37@boston.com', 'gender': 'Male', 'ip_address': '9.124.228.45' },
  { 'id': 117, 'first_name': 'Raymond', 'last_name': 'Andrews', 'email': 'randrews38@usa.gov', 'gender': 'Male', 'ip_address': '187.150.5.76' },
  { 'id': 118, 'first_name': 'Brian', 'last_name': 'Ruiz', 'email': 'bruiz39@yandex.ru', 'gender': 'Male', 'ip_address': '39.187.56.158' },
  { 'id': 119, 'first_name': 'Lillian', 'last_name': 'Lopez', 'email': 'llopez3a@toplist.cz', 'gender': 'Female', 'ip_address': '123.115.126.114' },
  { 'id': 120, 'first_name': 'Dennis', 'last_name': 'Bennett', 'email': 'dbennett3b@studiopress.com', 'gender': 'Male', 'ip_address': '72.153.194.100' },
  { 'id': 121, 'first_name': 'Bruce', 'last_name': 'Mitchell', 'email': 'bmitchell3c@spiegel.de', 'gender': 'Male', 'ip_address': '66.219.81.51' },
  { 'id': 122, 'first_name': 'Diane', 'last_name': 'Martin', 'email': 'dmartin3d@netlog.com', 'gender': 'Female', 'ip_address': '13.173.149.160' },
  { 'id': 123, 'first_name': 'Lillian', 'last_name': 'Gray', 'email': 'lgray3e@economist.com', 'gender': 'Female', 'ip_address': '1.215.8.248' },
  { 'id': 124, 'first_name': 'Janice', 'last_name': 'Burton', 'email': 'jburton3f@cisco.com', 'gender': 'Female', 'ip_address': '49.147.18.166' },
  { 'id': 125, 'first_name': 'Thomas', 'last_name': 'Scott', 'email': 'tscott3g@ning.com', 'gender': 'Male', 'ip_address': '201.109.158.26' },
  { 'id': 126, 'first_name': 'Randy', 'last_name': 'James', 'email': 'rjames3h@redcross.org', 'gender': 'Male', 'ip_address': '244.83.83.250' },
  { 'id': 127, 'first_name': 'Ryan', 'last_name': 'Hayes', 'email': 'rhayes3i@blogspot.com', 'gender': 'Male', 'ip_address': '254.3.181.119' },
  { 'id': 128, 'first_name': 'Samuel', 'last_name': 'Nelson', 'email': 'snelson3j@bloglines.com', 'gender': 'Male', 'ip_address': '193.251.121.108' },
  { 'id': 129, 'first_name': 'Lawrence', 'last_name': 'Williams', 'email': 'lwilliams3k@dmoz.org', 'gender': 'Male', 'ip_address': '41.236.153.31' },
  { 'id': 130, 'first_name': 'Christina', 'last_name': 'Hunt', 'email': 'chunt3l@slideshare.net', 'gender': 'Female', 'ip_address': '160.98.125.4' },
  { 'id': 131, 'first_name': 'Marie', 'last_name': 'Bradley', 'email': 'mbradley3m@house.gov', 'gender': 'Female', 'ip_address': '201.6.129.83' },
  { 'id': 132, 'first_name': 'Keith', 'last_name': 'West', 'email': 'kwest3n@sun.com', 'gender': 'Male', 'ip_address': '183.48.52.237' },
  { 'id': 133, 'first_name': 'Justin', 'last_name': 'Peterson', 'email': 'jpeterson3o@shop-pro.jp', 'gender': 'Male', 'ip_address': '166.215.226.121' },
  { 'id': 134, 'first_name': 'Judith', 'last_name': 'Howell', 'email': 'jhowell3p@pbs.org', 'gender': 'Female', 'ip_address': '28.10.202.95' },
  { 'id': 135, 'first_name': 'Ruth', 'last_name': 'Fisher', 'email': 'rfisher3q@cpanel.net', 'gender': 'Female', 'ip_address': '208.47.43.154' },
  { 'id': 136, 'first_name': 'Peter', 'last_name': 'Smith', 'email': 'psmith3r@latimes.com', 'gender': 'Male', 'ip_address': '90.7.224.167' },
  { 'id': 137, 'first_name': 'Bruce', 'last_name': 'Rogers', 'email': 'brogers3s@yolasite.com', 'gender': 'Male', 'ip_address': '153.87.83.51' },
  { 'id': 138, 'first_name': 'Victor', 'last_name': 'Evans', 'email': 'vevans3t@soup.io', 'gender': 'Male', 'ip_address': '211.160.19.182' },
  { 'id': 139, 'first_name': 'Heather', 'last_name': 'Rose', 'email': 'hrose3u@domainmarket.com', 'gender': 'Female', 'ip_address': '54.151.66.250' },
  { 'id': 140, 'first_name': 'Scott', 'last_name': 'Ellis', 'email': 'sellis3v@twitpic.com', 'gender': 'Male', 'ip_address': '148.106.172.139' },
  { 'id': 141, 'first_name': 'Lillian', 'last_name': 'Evans', 'email': 'levans3w@fc2.com', 'gender': 'Female', 'ip_address': '241.201.53.213' },
  { 'id': 142, 'first_name': 'Wanda', 'last_name': 'Hernandez', 'email': 'whernandez3x@google.fr', 'gender': 'Female', 'ip_address': '252.75.141.219' },
  { 'id': 143, 'first_name': 'Fred', 'last_name': 'Wright', 'email': 'fwright3y@mozilla.org', 'gender': 'Male', 'ip_address': '79.107.231.249' },
  { 'id': 144, 'first_name': 'Gary', 'last_name': 'Hunt', 'email': 'ghunt3z@smugmug.com', 'gender': 'Male', 'ip_address': '194.85.175.6' },
  { 'id': 145, 'first_name': 'Melissa', 'last_name': 'Daniels', 'email': 'mdaniels40@irs.gov', 'gender': 'Female', 'ip_address': '49.225.142.111' },
  { 'id': 146, 'first_name': 'Joe', 'last_name': 'Cox', 'email': 'jcox41@guardian.co.uk', 'gender': 'Male', 'ip_address': '247.85.213.144' },
  { 'id': 147, 'first_name': 'Aaron', 'last_name': 'Phillips', 'email': 'aphillips42@geocities.jp', 'gender': 'Male', 'ip_address': '239.209.145.227' },
  { 'id': 148, 'first_name': 'Joseph', 'last_name': 'Porter', 'email': 'jporter43@unblog.fr', 'gender': 'Male', 'ip_address': '69.193.223.63' },
  { 'id': 149, 'first_name': 'James', 'last_name': 'Medina', 'email': 'jmedina44@bloglines.com', 'gender': 'Male', 'ip_address': '173.246.57.84' },
  { 'id': 150, 'first_name': 'Joseph', 'last_name': 'White', 'email': 'jwhite45@ucoz.ru', 'gender': 'Male', 'ip_address': '32.226.74.213' },
  { 'id': 151, 'first_name': 'Steven', 'last_name': 'Graham', 'email': 'sgraham46@symantec.com', 'gender': 'Male', 'ip_address': '26.104.102.84' },
  { 'id': 152, 'first_name': 'Beverly', 'last_name': 'Greene', 'email': 'bgreene47@answers.com', 'gender': 'Female', 'ip_address': '131.132.64.132' },
  { 'id': 153, 'first_name': 'Anna', 'last_name': 'Robinson', 'email': 'arobinson48@netlog.com', 'gender': 'Female', 'ip_address': '241.144.105.31' },
  { 'id': 154, 'first_name': 'Charles', 'last_name': 'Gardner', 'email': 'cgardner49@bravesites.com', 'gender': 'Male', 'ip_address': '20.210.199.74' },
  { 'id': 155, 'first_name': 'Donna', 'last_name': 'Price', 'email': 'dprice4a@godaddy.com', 'gender': 'Female', 'ip_address': '250.81.143.18' },
  { 'id': 156, 'first_name': 'Billy', 'last_name': 'Davis', 'email': 'bdavis4b@apple.com', 'gender': 'Male', 'ip_address': '149.68.197.244' },
  { 'id': 157, 'first_name': 'Stephen', 'last_name': 'Gordon', 'email': 'sgordon4c@chicagotribune.com', 'gender': 'Male', 'ip_address': '193.200.246.25' },
  { 'id': 158, 'first_name': 'Howard', 'last_name': 'Stevens', 'email': 'hstevens4d@paypal.com', 'gender': 'Male', 'ip_address': '84.66.162.82' },
  { 'id': 159, 'first_name': 'Melissa', 'last_name': 'Matthews', 'email': 'mmatthews4e@netvibes.com', 'gender': 'Female', 'ip_address': '208.180.157.149' },
  { 'id': 160, 'first_name': 'Catherine', 'last_name': 'Graham', 'email': 'cgraham4f@dagondesign.com', 'gender': 'Female', 'ip_address': '160.95.59.174' },
  { 'id': 161, 'first_name': 'Tammy', 'last_name': 'Robinson', 'email': 'trobinson4g@mayoclinic.com', 'gender': 'Female', 'ip_address': '254.184.102.159' },
  { 'id': 162, 'first_name': 'Frances', 'last_name': 'Stanley', 'email': 'fstanley4h@wikimedia.org', 'gender': 'Female', 'ip_address': '26.240.164.179' },
  { 'id': 163, 'first_name': 'Kevin', 'last_name': 'Franklin', 'email': 'kfranklin4i@foxnews.com', 'gender': 'Male', 'ip_address': '169.166.116.205' },
  { 'id': 164, 'first_name': 'Jennifer', 'last_name': 'Bishop', 'email': 'jbishop4j@scribd.com', 'gender': 'Female', 'ip_address': '30.211.127.220' },
  { 'id': 165, 'first_name': 'Samuel', 'last_name': 'Nguyen', 'email': 'snguyen4k@techcrunch.com', 'gender': 'Male', 'ip_address': '196.102.107.21' },
  { 'id': 166, 'first_name': 'John', 'last_name': 'Moreno', 'email': 'jmoreno4l@google.de', 'gender': 'Male', 'ip_address': '16.83.143.7' },
  { 'id': 167, 'first_name': 'Joyce', 'last_name': 'White', 'email': 'jwhite4m@hubpages.com', 'gender': 'Female', 'ip_address': '163.101.224.217' },
  { 'id': 168, 'first_name': 'Julie', 'last_name': 'Moreno', 'email': 'jmoreno4n@shinystat.com', 'gender': 'Female', 'ip_address': '21.93.184.75' },
  { 'id': 169, 'first_name': 'Tammy', 'last_name': 'Berry', 'email': 'tberry4o@plala.or.jp', 'gender': 'Female', 'ip_address': '150.95.86.15' },
  { 'id': 170, 'first_name': 'Mary', 'last_name': 'Banks', 'email': 'mbanks4p@sciencedirect.com', 'gender': 'Female', 'ip_address': '185.62.53.76' },
  { 'id': 171, 'first_name': 'Rebecca', 'last_name': 'Oliver', 'email': 'roliver4q@infoseek.co.jp', 'gender': 'Female', 'ip_address': '120.206.34.72' },
  { 'id': 172, 'first_name': 'Henry', 'last_name': 'Collins', 'email': 'hcollins4r@theguardian.com', 'gender': 'Male', 'ip_address': '149.229.176.55' },
  { 'id': 173, 'first_name': 'Judy', 'last_name': 'Russell', 'email': 'jrussell4s@home.pl', 'gender': 'Female', 'ip_address': '251.237.235.231' },
  { 'id': 174, 'first_name': 'David', 'last_name': 'Murray', 'email': 'dmurray4t@china.com.cn', 'gender': 'Male', 'ip_address': '21.53.208.31' },
  { 'id': 175, 'first_name': 'Chris', 'last_name': 'Hill', 'email': 'chill4u@angelfire.com', 'gender': 'Male', 'ip_address': '53.11.2.233' },
  { 'id': 176, 'first_name': 'Donna', 'last_name': 'Washington', 'email': 'dwashington4v@bravesites.com', 'gender': 'Female', 'ip_address': '46.199.168.32' },
  { 'id': 177, 'first_name': 'Laura', 'last_name': 'Armstrong', 'email': 'larmstrong4w@rambler.ru', 'gender': 'Female', 'ip_address': '88.45.30.73' },
  { 'id': 178, 'first_name': 'Lawrence', 'last_name': 'Stephens', 'email': 'lstephens4x@seesaa.net', 'gender': 'Male', 'ip_address': '127.195.20.139' },
  { 'id': 179, 'first_name': 'Frank', 'last_name': 'Lawson', 'email': 'flawson4y@cornell.edu', 'gender': 'Male', 'ip_address': '116.20.7.133' },
  { 'id': 180, 'first_name': 'Sarah', 'last_name': 'Duncan', 'email': 'sduncan4z@liveinternet.ru', 'gender': 'Female', 'ip_address': '220.190.175.169' },
  { 'id': 181, 'first_name': 'Robert', 'last_name': 'Young', 'email': 'ryoung50@spiegel.de', 'gender': 'Male', 'ip_address': '175.221.127.187' },
  { 'id': 182, 'first_name': 'Nancy', 'last_name': 'Bishop', 'email': 'nbishop51@w3.org', 'gender': 'Female', 'ip_address': '28.119.27.65' },
  { 'id': 183, 'first_name': 'Steve', 'last_name': 'Ellis', 'email': 'sellis52@oaic.gov.au', 'gender': 'Male', 'ip_address': '173.96.208.80' },
  { 'id': 184, 'first_name': 'Shawn', 'last_name': 'Powell', 'email': 'spowell53@columbia.edu', 'gender': 'Male', 'ip_address': '156.96.115.233' },
  { 'id': 185, 'first_name': 'Joe', 'last_name': 'Palmer', 'email': 'jpalmer54@delicious.com', 'gender': 'Male', 'ip_address': '93.191.134.212' },
  { 'id': 186, 'first_name': 'Ruby', 'last_name': 'Reynolds', 'email': 'rreynolds55@google.fr', 'gender': 'Female', 'ip_address': '88.21.223.233' },
  { 'id': 187, 'first_name': 'Randy', 'last_name': 'Schmidt', 'email': 'rschmidt56@ebay.com', 'gender': 'Male', 'ip_address': '21.186.81.93' },
  { 'id': 188, 'first_name': 'Raymond', 'last_name': 'King', 'email': 'rking57@addthis.com', 'gender': 'Male', 'ip_address': '105.172.178.60' },
  { 'id': 189, 'first_name': 'Harry', 'last_name': 'Bennett', 'email': 'hbennett58@epa.gov', 'gender': 'Male', 'ip_address': '174.46.15.178' },
  { 'id': 190, 'first_name': 'Donald', 'last_name': 'Hawkins', 'email': 'dhawkins59@comcast.net', 'gender': 'Male', 'ip_address': '244.10.184.58' },
  { 'id': 191, 'first_name': 'Dennis', 'last_name': 'Tucker', 'email': 'dtucker5a@a8.net', 'gender': 'Male', 'ip_address': '231.232.81.91' },
  { 'id': 192, 'first_name': 'Bruce', 'last_name': 'Ferguson', 'email': 'bferguson5b@fda.gov', 'gender': 'Male', 'ip_address': '16.187.181.184' },
  { 'id': 193, 'first_name': 'Cynthia', 'last_name': 'Jacobs', 'email': 'cjacobs5c@behance.net', 'gender': 'Female', 'ip_address': '161.225.157.119' },
  { 'id': 194, 'first_name': 'Terry', 'last_name': 'Mason', 'email': 'tmason5d@amazon.de', 'gender': 'Male', 'ip_address': '132.132.95.140' },
  { 'id': 195, 'first_name': 'Harry', 'last_name': 'Mitchell', 'email': 'hmitchell5e@clickbank.net', 'gender': 'Male', 'ip_address': '245.236.254.195' },
  { 'id': 196, 'first_name': 'Tina', 'last_name': 'Hayes', 'email': 'thayes5f@pcworld.com', 'gender': 'Female', 'ip_address': '28.253.43.239' },
  { 'id': 197, 'first_name': 'Tammy', 'last_name': 'Castillo', 'email': 'tcastillo5g@cdbaby.com', 'gender': 'Female', 'ip_address': '93.204.24.61' },
  { 'id': 198, 'first_name': 'Victor', 'last_name': 'Murphy', 'email': 'vmurphy5h@whitehouse.gov', 'gender': 'Male', 'ip_address': '57.0.132.165' },
  { 'id': 199, 'first_name': 'Susan', 'last_name': 'Hart', 'email': 'shart5i@businessweek.com', 'gender': 'Female', 'ip_address': '197.55.173.172' },
  { 'id': 200, 'first_name': 'Margaret', 'last_name': 'Wright', 'email': 'mwright5j@blog.com', 'gender': 'Female', 'ip_address': '114.164.236.16' }];
  columns: Array<any> = [
    {
      title: 'ID',
      name: 'id'
    },
    {
      title: 'First Name',
      name: 'first_name'
    },
    {
      title: 'Last Name',
      name: 'last_name',
    },
    {
      title: 'Email Address',
      name: 'email'
    },
    {
      title: 'Gender',
      name: 'gender'
    },
    {
      title: 'IP Address',
      name: 'ip_address'
    }
  ];
  page = 1;
  itemsPerPage = 10;
  maxSize = 5;
  numPages = 1;
  length = 0;
  data: Array<any> = this.rows;

  config: any = {
    paging: true,
    sorting: { columns: this.columns },
    filtering: { filterString: '' },
    className: ['table-bordered']
  };

  changePage(page: any, data: Array<any> = this.data): Array<any> {
    const start = (page.page - 1) * page.itemsPerPage;
    const end = page.itemsPerPage > -1 ? (start + page.itemsPerPage) : data.length;
    return data.slice(start, end);
  }

  changeSort(data: any, config: any): any {
    if (!config.sorting) {
      return data;
    }

    const columns = this.config.sorting.columns || [];
    let columnName: string = void 0;
    let sort: string = void 0;

    for (let i = 0; i < columns.length; i++) {
      if (columns[i].sort !== '' && columns[i].sort !== false) {
        columnName = columns[i].name;
        sort = columns[i].sort;
      }
    }

    if (!columnName) {
      return data;
    }

    // simple sorting
    return data.sort((previous: any, current: any) => {
      if (previous[columnName] > current[columnName]) {
        return sort === 'desc' ? -1 : 1;
      } else if (previous[columnName] < current[columnName]) {
        return sort === 'asc' ? -1 : 1;
      }
      return 0;
    });
  }

  changeFilter(data: any, config: any): any {
    let filteredData: Array<any> = data;
    this.columns.forEach((column: any) => {
      if (column.filtering) {
        filteredData = filteredData.filter((item: any) => {
          return item[column.name].match(column.filtering.filterString);
        });
      }
    });

    if (!config.filtering) {
      return filteredData;
    }

    if (config.filtering.columnName) {
      return filteredData.filter((item: any) =>
        item[config.filtering.columnName].match(this.config.filtering.filterString));
    }

    const tempArray: Array<any> = [];
    filteredData.forEach((item: any) => {
      let flag = false;
      this.columns.forEach((column: any) => {
        if (item[column.name].toString().match(this.config.filtering.filterString)) {
          flag = true;
        }
      });
      if (flag) {
        tempArray.push(item);
      }
    });
    filteredData = tempArray;

    return filteredData;
  }

  onChangeTable(config: any, page: any = { page: this.page, itemsPerPage: this.itemsPerPage }): any {
    if (config.filtering) {
      (<any>Object).assign(this.config.filtering, config.filtering);
    }

    if (config.sorting) {
      (<any>Object).assign(this.config.sorting, config.sorting);
    }

    const filteredData = this.changeFilter(this.data, this.config);
    const sortedData = this.changeSort(filteredData, this.config);
    this.rows = page && config.paging ? this.changePage(page, sortedData) : sortedData;
    this.length = sortedData.length;
  }

  constructor(private http: HttpClient) {
    this.length = this.data.length;
  }

  ngOnInit() {
    this.onChangeTable(this.config);
  }
}
