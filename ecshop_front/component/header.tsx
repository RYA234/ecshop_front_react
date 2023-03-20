import Link from "next/link";
import { useContext, useState } from "react";
import { mainContext } from '../pages/index';

export default function Header() {
	
	const isLogin  = useContext(mainContext);



	return (
		<div>
		<header>
			<div className="box1">	{isLogin}</div>
	
			<div className="btn-area">
				{isLogin ? 
				<>
					<button>ログアウト</button> 

					<button>マイページ</button>					
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
				header{
					width:100%;
					height:100px;
					background-color:#dcdcdc;
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