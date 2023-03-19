import Link from "next/link";
import { useState } from "react";

export default function Header() {
	
	const [isLogin, setIsLogin] = useState(false);



	return (
		<div>
		<header>
			<div className="box1">logo</div>
			<div className="btn-area">
				{isLogin ? 
				<>
					<button>ログアウト</button> 
					<button>マイページ</button>
									
				</>
				: 
				<>
				<div className="link">
					<Link href="/login">新規登録</Link>
				</div>
				<div className="link">
					<Link href="register">ログイン</Link>
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