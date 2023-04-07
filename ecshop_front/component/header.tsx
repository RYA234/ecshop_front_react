import Link from "next/link";
import { useContext, useState } from "react";
import { mainContext } from '../pages/mainPage';
import Image from 'next/image';
import  Router from "next/router";
export default function Header() {
	
	const {isLogin,setIsLogin} : any = useContext(mainContext);


	const onLogoutButtonHandler = async() => {
		localStorage.removeItem("accessToken")
		setIsLogin(false)
		Router.push("/")
	}

	return (
		<div>
		<header>
			<div className="HeaderImage">
			<Image src='/icons/HeaderImage.JPG'
                        width={529} 
                        height={122}
                        alt='logo' />
          				
			</div>
			<div className="btn-area">
				{isLogin ? 
				<>
					<button onClick={onLogoutButtonHandler} className="LogoutIcon">	
						<Image src='/icons/LogoutIcon.JPG'
									width={42} 
									height={42}
									alt='logo' />				
					</button> 
					<div className="LogoutText">ログアウト</div>

					<button className="MyPageIcon">
						<Image src='/icons/MyPageIcon.JPG'
										width={42} 
										height={42}
										alt='logo' />
					</button>				
					<div className="MyPageText">マイページ</div>	
				</>
				: 
				<>
				<div className="link">
					<Link href="/login">ログイン</Link>
				</div>
				<div className="link">
					<Link href="register">新規登録</Link>
				</div>
				</>
			}	
			</div>


		</header>
			<style jsx>{`
			.LogoutIcon{
				position: absolute;
				width: 42px;
				height: 42px;
				left: 1195px;
				top: 27px;
				
			}
			.LogoutIcon:hover{
				cursor:pointer;
			}
			.MyPageIcon{
				position: absolute;
				width: 42px;
				height: 42px;
				left: 1275px;
				top: 27px;				
			}
			.MyPageIcon:hover{
				cursor:pointer;
			}

			.MyPageText{
				position: absolute;
				width: 60px;
				height: 15px;
				left: 1281px;
				top: 78px;
				
				font-family: 'Inter';
				font-style: normal;
				font-weight: 100;
				font-size: 12px;
				line-height: 15px;
				/* ボックスの高さと同一 */
				
				
				color: #000000;
			}

			.LogoutText{
				position: absolute;
				width: 60px;
				height: 15px;
				left: 1200px;
				top: 78px;
				
				font-family: 'Inter';
				font-style: normal;
				font-weight: 100;
				font-size: 12px;
				line-height: 15px;
				/* ボックスの高さと同一 */
				
				
				color: #000000;			
			}
			.HeaderImage{
				position: absolute;
				left: 10px;
				top: -9px;
				
			}
				header{
					width:100%;
					height:100px;
					// background-color:#dcdcdc;
				  /* display:flexでalign-items:centerにすることで要素を真ん中に配置出来ます   */
					display:flex;
					align-items:center;
					justify-content:space-between;
				  }
				.link{
					background-color:white;
					border:none;
					padding:10px 20px;
				}
				  .box1{
					background-color:blue;
					width:200px;
					text-align:center;
					padding:20px 0;
					color:white;
				  }
				  .btn-area{
					display:inline-flex;
					margin-right:20px;
					gap: 6px 4px; /* 余白 */
				   }
				  button{
					background-color:white;
					border:none;
					padding:10px 20px;
				  }
			`}</style>
		</div>

	)
}