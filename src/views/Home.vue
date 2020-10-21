<template>
	<el-row class="container">
		<el-col :span="24" class="header">
			<div class="logo">
				<!--<img :src="moyunLogo" @click="$router.push('/')"/>-->
				<span>摩云劳务——人社监管平台</span>
			</div>
			<div class="header-right">
				<div class="header-right-l">

				</div>
				<div class="header-right-r">
					<img :src="adminAvatar"/>
					<el-dropdown trigger="click">
						<span class="el-dropdown-link">{{companyName}}<i class="el-icon-arrow-down el-icon--right"></i></span>
						<el-dropdown-menu slot="dropdown" style="padding: 0;">
							<el-dropdown-item @click.native="out" style="padding: 0 25px; text-align: center">退出</el-dropdown-item>
						</el-dropdown-menu>
					</el-dropdown>
				</div>
			</div>
		</el-col>
		<el-col :span="24" class="main">
			<aside class="menu-expanded">
				<!--导航菜单-->
				<el-menu :default-active="defaultActive" class="el-menu-vertical-demo" unique-opened router background-color="#4A5259" text-color="#fff" active-text-color="#409eff">
					<template v-for="(item,index) in routers" v-if="!item.hidden">
						<el-submenu :index="index+''" v-if="!item.leaf">
							<template slot="title"><i :class="item.iconCls"></i>{{item.name}}</template>
							<el-menu-item v-for="child in item.children" :index="child.path" :key="child.path" v-if="!child.meta.hidden" style="padding-left:62px!important">{{child.name}}</el-menu-item>
						</el-submenu>
						<el-menu-item v-if="item.leaf&&item.children.length>0" :index="item.children[0].path"><i :class="item.iconCls"></i>{{item.children[0].name}}</el-menu-item>
					</template>
				</el-menu>
			</aside>
			<section class="content-container">
				<div class="grid-content bg-purple-light">
					<el-col :span="24" class="breadcrumb-container">
						<el-breadcrumb separator="/" class="breadcrumb-inner">
							<el-breadcrumb-item v-for="item in $route.matched" :key="item.path">{{ item.name }}</el-breadcrumb-item>
						</el-breadcrumb>
					</el-col>
					<el-col :span="24" class="content-wrapper">
						<transition name="fade" mode="out-in">
							<router-view></router-view>
						</transition>
					</el-col>
				</div>
			</section>
		</el-col>
	</el-row>
</template>

<script>
	import { mapState } from 'vuex'
	export default {
		data() {
			return {
				routers: []		//路由数组
			}
		},
		methods: {
			// 退出登录
			out() {
				this.$msg.MsgBox('确认退出登录？')
				.then(() => {
					this.$store.commit('changeToken', '')
					this.$store.commit('changeAuthMobile', '')
					setTimeout(_ => window.location.reload(), 200)
					this.$msg.Success('退出成功')
					localStorage.clear()
					// this.$cookies.remove('changeToken')
					this.$router.push('/login')
				})
			},
		},
		computed: {
			...mapState(['moyunLogo', 'adminAvatar', 'companyName']),
			defaultActive() {
				if(this.$route.meta.hidden) {
					return this.$route.meta.defaultActive
				} else {
					return this.$route.path
				}
			}
		},
		created() {
			this.$router.options.routes.map(item => {
				if(!item.hidden) {
					this.routers.push(item)
				}
			})
		}
	}

</script>

<style scoped lang="scss">
	.container {
		position: absolute;
		top: 0px;
		bottom: 0px;
		width: 100%;
		.header {
			height: 80px;
			line-height: 80px;
			background: $color;
			//color:#fff;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.logo {
				width: 540px;
				box-sizing: border-box;
				height:80px;
				// background-color: #0B1549;
				display: flex;
				// justify-content: center;
				align-items: center;
				img {
					width: 200px;
					height: 60px;
					cursor: pointer;
				}
				span {
					font-size: 22px;
					padding-left: 20px;
					font-weight: 700;
					letter-spacing: 3px;
					color: #fff;
				}
			}
			.logo-collapse-width{
				width:60px
			}
			.header-right {
				padding-right: 35px;
				padding-left: 35px;
				box-sizing: border-box;
				// width: calc(100% - 240px);
				display: flex;
				justify-content: space-between;
				align-items: center;
				.header-right-l {
					display: flex;
					align-items: center;
					.company-name {
						font-size: 24px;
					}
				}
				.header-right-r {
					img {
						width: 40px;
						height: 40px;
						border-radius: 50%;
						margin-right: 20px;
						margin-top: -6px;
					}
					/deep/ .el-dropdown {
						color: #fff;
						font-size: 18px;
						cursor: pointer;
					}
				}
			}
		}
		.main {
			display: flex;
			position: absolute;
			top: 80px;
			bottom: 0px;
			overflow: hidden;
			aside {
				flex:0 0 240px;
				width: 240px;
				.el-menu{
					height: 100%;
					border-right: none;
					//padding-top: 20px;
					/deep/ .el-submenu__icon-arrow {
						font-size: 20px;
						margin-top: -10px;
						//color: #fff;
					}
					/deep/ .el-submenu__title {
						font-size: 16px;
						font-weight: bold;
						padding-left: 35px !important;
						i {
							color: #fff;
						}
						i:first-child {
							font-size: 20px;
							//color: #fff;
							margin-top: -3px;
							margin-right: 5px;
							font-weight: normal;
						}
					}
					/deep/ .el-menu-item {
						font-size: 16px;
						font-weight: bold;
						padding-left: 35px !important;
						i {
							color: #fff;
						}
						i:first-child {
							font-size: 20px;
							//color: #fff;
							margin-top: -3px;
							font-weight: normal;
							margin-right: 5px;
						}
					}
					/deep/ .el-menu-item.is-active {
						i:first-child {
							color: $color;
						}
					}
					/deep/ .el-submenu .el-menu-item {
						font-size: 15px;
						font-weight: bold;
					}
				}
				.collapsed{
					width:60px;
					.item{
						position: relative;
					}
					.submenu{
						position:absolute;
						top:0px;
						left:60px;
						z-index:99999;
						height:auto;
						display:none;
					}

				}
			}
			.menu-collapsed{
				flex:0 0 60px;
				width: 60px;
			}
			.menu-expanded{
				flex:0 0 240px;
				width: 240px;
			}
			.content-container {
				background: #F0F0F0;
				flex:1;
				overflow-y: scroll;
				padding: 20px;
				.breadcrumb-container {
					.title {
						width: 200px;
						float: left;
						color: #475669;
					}
					.breadcrumb-inner {
						//float: right;
						margin-left: 20px;
					}
				}
				.content-wrapper {
					background-color: #fff;
					box-sizing: border-box;
					border-radius: 5px;
					padding: 15px 10px;
					margin-top: 20px;
				}
			}
		}
	}
	/deep/ .el-dropdown-menu__item {
		padding: 0 20px !important;
	}
	.wuye-name {
		font-size: 20px;
		font-weight: bold;
		padding-left: 20px;
	}
	.menu-icon {
		font-size: 24px !important;
		line-height: 23px;
	}
</style>