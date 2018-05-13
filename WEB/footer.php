<style>
    /* ************footer************ */
.generic-anchor {
	color: #8DB9ED;
}
.generic-anchor:visited {
	color: #8DB9ED;
}
.generic-anchor:hover {
	color: #ccc;
}
.flex-rw {
	display: flex;
	flex-flow: row wrap;
  }
  main {
	flex: 1 1 auto; 
	display: flex;
	align-items: center;
	justify-content: center;
	font: 10em "Oswald", sans-serif;
	color: rgb(155,155,155);
	line-height: 1
  }
  footer {
	background: rgb(55,55,55);
	margin-top: auto;
	width: 100%
  }
  .footer-list-top {
    width: 33.333%
  }
  .footer-list-top > li {
	text-align: center;
    padding-bottom: 10px;
    list-style-type: none;
  }
  .footer-list-header {
	padding: 10px 0 5px 0;
	color: #fff;
	font: 2.3vw "Oswald", sans-serif;
  }
  .footer-list-anchor {
    font: 1.3em "Open Sans", sans-serif;
  }
  .footer-social-section {
	width: 100%;
	align-items: center;
	justify-content: space-around;
	position: relative;
	margin-top: 5px;
  }
  .footer-social-section::after {
	content: "";
	position: absolute;
	z-index: 1;
	top: 50%;
	left: 10px;
	border-top: 1px solid #ccc;
	width: calc(100% - 20px)
  }
  .footer-social-overlap {
	position: relative;
	z-index: 2;
	background: rgb(55,55,55);
	padding: 0 20px
  }
  .footer-social-connect {
	display: flex;
	align-items: center;
	font: 3.5em "Oswald", sans-serif;
	color: #fff
  }
  .footer-social-small {
	font-size: 0.6em;
	padding: 0px 20px
  }
  .footer-social-overlap > a {
	font-size: 3em
  }
  .footer-social-overlap > a:not(:first-child) {
	margin-left: 0.38em
  }
  .footer-bottom-section {
	width: 100%;
	padding: 10px;
	border-top: 1px solid #ccc;
	margin-top: 10px;
	text-align: right;		  
  }
  .footer-bottom-section > div:first-child {
	margin-right: auto
  }
  .footer-bottom-wrapper {
	font-size: 1.5em;
	color: #fff
  }
  .footer-address {
	display: inline;
	font-style: normal
  }
</style>


<footer class="flex-rw">
					<ul class="footer-list-top">
						<li>
							<h4 class="footer-list-header">Liên kết ngoài </h4>
						</li>
						<li>
							<a href='' class="generic-anchor footer-list-anchor" itemprop="significantLink">Facebook</a>
						</li>
						<li>
							<a href='' class="generic-anchor footer-list-anchor" itemprop="significantLink">Zalo</a>
						</li>
						<li>
							<a href='' class="generic-anchor footer-list-anchor" itemprop="significantLink">Twitter</a>
						</li>
					</ul>
					<ul class="footer-list-top">
						<li>
							<h4 class="footer-list-header">Hỗ trợ khách hàng</h4>
						</li>


						<li>
							<a href='' class="generic-anchor footer-list-anchor">Liên hệ</a>
						</li>
						<li>
							<a href='' class="generic-anchor footer-list-anchor">Câu hỏi thường gặp</a>
						</li>
						<li>
							<a href='' class="generic-anchor footer-list-anchor">Các quy định của loveMarket</a>
						</li>
					</ul>
					<ul class="footer-list-top">
						<li id='help'>
							<h4 class="footer-list-header">Về chúng tôi</h4>
						</li>
						<li>
							<a href='' class="generic-anchor footer-list-anchor" itemprop="significantLink">Giới thiệu</a>
						</li>
						<li>
							<a href='' class="generic-anchor footer-list-anchor" itemprop="significantLink">Truyền thông</a>
						</li>
					</ul>
					<section class="footer-bottom-section">
						<div class="footer-bottom-wrapper">
							<i class="fa fa-copyright" role="copyright">
									© SE214.I21_Nhom4
							</i> 
							<br>
							<address class="footer-address" role="company address">Ho Chi Minh</address>
							<br>
							<address class="footer-address" role="email address">email:15520161@gm.uit.edu.vn</address>						
							<span class="footer-bottom-rights"> </span>
						</div>
					</section>
				</footer>