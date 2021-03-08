(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{670:function(a,t,e){"use strict";e.r(t);var l=e(0),o=Object(l.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"部署你自己的测试网"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#部署你自己的测试网"}},[a._v("#")]),a._v(" 部署你自己的测试网")]),a._v(" "),e("p",[a._v("这篇文章介绍了三种创建"),e("code",[a._v("gaiad")]),a._v("节点的测试网的方式，每种针对不同的使用场景：")]),a._v(" "),e("ol",[e("li",[a._v("单节点，本地的，手动的测试网")]),a._v(" "),e("li",[a._v("多节点，本地的，自动的测试网")]),a._v(" "),e("li",[a._v("多节点，远程的，自动的测试网")])]),a._v(" "),e("p",[a._v("支持代码可以在"),e("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/tree/develop/networks",target:"_blank",rel:"noopener noreferrer"}},[a._v("networks 目录"),e("OutboundLink")],1),a._v("中找到，还可以在"),e("code",[a._v("local")]),a._v("或"),e("code",[a._v("remote")]),a._v("子目录中找到。")]),a._v(" "),e("blockquote",[e("p",[a._v("注意："),e("code",[a._v("remote")]),a._v("网络引导教程可能与最新版本不同步，不可完全依赖。")])]),a._v(" "),e("h2",{attrs:{id:"可获取的-docker-镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#可获取的-docker-镜像"}},[a._v("#")]),a._v(" 可获取的 Docker 镜像")]),a._v(" "),e("p",[a._v("如果你需要使用或部署 gaia 作为容器，你可以跳过"),e("code",[a._v("build")]),a._v("步骤并使用官方镜像，$TAG 标识你感兴趣的版本：")]),a._v(" "),e("ul",[e("li",[e("code",[a._v("docker run -it -v ~/.gaia:/root/.gaia -v ~/.gaia:/root/.gaia tendermint:$TAG gaiad init")])]),a._v(" "),e("li",[e("code",[a._v("docker run -it -p 26657:26657 -p 26656:26656 -v ~/.gaia:/root/.gaia -v ~/.gaia:/root/.gaia tendermint:$TAG gaiad start")])]),a._v(" "),e("li",[a._v("...")]),a._v(" "),e("li",[e("code",[a._v("docker run -it -v ~/.gaia:/root/.gaia -v ~/.gaia:/root/.gaia tendermint:$TAG gaiad version")])])]),a._v(" "),e("p",[a._v("相同的镜像也可以用于构建你自己的 docker-compose 栈")]),a._v(" "),e("h2",{attrs:{id:"单节点-本地的-手动的测试网"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#单节点-本地的-手动的测试网"}},[a._v("#")]),a._v(" 单节点，本地的，手动的测试网")]),a._v(" "),e("p",[a._v("本教程可帮助你创建一个在本地运行网络的验证人节点，以进行测试和其他相关的用途。")]),a._v(" "),e("h3",{attrs:{id:"需要"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#需要"}},[a._v("#")]),a._v(" 需要")]),a._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/translations/cn/installation.html"}},[a._v("安装 gaia")])],1),a._v(" "),e("li",[e("a",{attrs:{href:"https://stedolan.github.io/jq/download/",target:"_blank",rel:"noopener noreferrer"}},[a._v("安装"),e("code",[a._v("jq")]),e("OutboundLink")],1),a._v("(可选的)")])]),a._v(" "),e("h3",{attrs:{id:"创建-genesis-文件并启动网络"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建-genesis-文件并启动网络"}},[a._v("#")]),a._v(" 创建 genesis 文件并启动网络")]),a._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"IyBZb3UgY2FuIHJ1biBhbGwgb2YgdGhlc2UgY29tbWFuZHMgZnJvbSB5b3VyIGhvbWUgZGlyZWN0b3J5CmNkICRIT01FCgojIEluaXRpYWxpemUgdGhlIGdlbmVzaXMuanNvbiBmaWxlIHRoYXQgd2lsbCBoZWxwIHlvdSB0byBib290c3RyYXAgdGhlIG5ldHdvcmsKZ2FpYWQgaW5pdCAtLWNoYWluLWlkPXRlc3RpbmcgdGVzdGluZwoKIyBDcmVhdGUgYSBrZXkgdG8gaG9sZCB5b3VyIHZhbGlkYXRvciBhY2NvdW50CmdhaWFkIGtleXMgYWRkIHZhbGlkYXRvcgoKIyBBZGQgdGhhdCBrZXkgaW50byB0aGUgZ2VuZXNpcy5hcHBfc3RhdGUuYWNjb3VudHMgYXJyYXkgaW4gdGhlIGdlbmVzaXMgZmlsZQojIE5PVEU6IHRoaXMgY29tbWFuZCBsZXRzIHlvdSBzZXQgdGhlIG51bWJlciBvZiBjb2lucy4gTWFrZSBzdXJlIHRoaXMgYWNjb3VudCBoYXMgc29tZSBjb2lucwojIHdpdGggdGhlIGdlbmVzaXMuYXBwX3N0YXRlLnN0YWtpbmcucGFyYW1zLmJvbmRfZGVub20gZGVub20sIHRoZSBkZWZhdWx0IGlzIHN0YWtpbmcKZ2FpYWQgYWRkLWdlbmVzaXMtYWNjb3VudCAkKGdhaWFkIGtleXMgc2hvdyB2YWxpZGF0b3IgLWEpIDEwMDAwMDAwMDBzdGFrZSwxMDAwMDAwMDAwdmFsaWRhdG9ydG9rZW4KCiMgR2VuZXJhdGUgdGhlIHRyYW5zYWN0aW9uIHRoYXQgY3JlYXRlcyB5b3VyIHZhbGlkYXRvcgpnYWlhZCBnZW50eCAtLW5hbWUgdmFsaWRhdG9yCgojIEFkZCB0aGUgZ2VuZXJhdGVkIGJvbmRpbmcgdHJhbnNhY3Rpb24gdG8gdGhlIGdlbmVzaXMgZmlsZQpnYWlhZCBjb2xsZWN0LWdlbnR4cwoKIyBOb3cgaXRzIHNhZmUgdG8gc3RhcnQgYGdhaWFkYApnYWlhZCBzdGFydAo="}}),a._v(" "),e("p",[a._v("启动将会把"),e("code",[a._v("gaiad")]),a._v("相关的所有数据放在"),e("code",[a._v("~/.gaia")]),a._v("目录。你可以检查所创建的 genesis 文件——"),e("code",[a._v("~/.gaia/config/genesis.json")]),a._v("。同时"),e("code",[a._v("gaiad")]),a._v("也已经配置完成并且有了一个拥有 token 的账户(stake 和自定义的代币)。")]),a._v(" "),e("h2",{attrs:{id:"多节点-本地的-自动的测试网"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#多节点-本地的-自动的测试网"}},[a._v("#")]),a._v(" 多节点，本地的，自动的测试网")]),a._v(" "),e("p",[a._v("在"),e("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/tree/develop/networks/local",target:"_blank",rel:"noopener noreferrer"}},[a._v("networks/local 目录"),e("OutboundLink")],1),a._v("中运行如下命令:")]),a._v(" "),e("h3",{attrs:{id:"需要-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#需要-2"}},[a._v("#")]),a._v(" 需要")]),a._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/translations/cn/installation.html"}},[a._v("安装 gaia")])],1),a._v(" "),e("li",[e("a",{attrs:{href:"https://docs.docker.com/install/",target:"_blank",rel:"noopener noreferrer"}},[a._v("安装 docker"),e("OutboundLink")],1)]),a._v(" "),e("li",[e("a",{attrs:{href:"https://docs.docker.com/compose/install/",target:"_blank",rel:"noopener noreferrer"}},[a._v("安装 docker-compose"),e("OutboundLink")],1)])]),a._v(" "),e("h3",{attrs:{id:"编译"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#编译"}},[a._v("#")]),a._v(" 编译")]),a._v(" "),e("p",[a._v("编译"),e("code",[a._v("gaiad")]),a._v("二进制文件(linux)和运行"),e("code",[a._v("localnet")]),a._v("命令所需的"),e("code",[a._v("tendermint/gaianode")]),a._v(" docker images。这个二进制文件将被安装到 container 中，并且可以更新重建 image，因此您只需要构建一次 image。")]),a._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"IyBDbG9uZSB0aGUgZ2FpYSByZXBvCmdpdCBjbG9uZSBodHRwczovL2dpdGh1Yi5jb20vY29zbW9zL2dhaWEuZ2l0CgojIFdvcmsgZnJvbSB0aGUgU0RLIHJlcG8KY2QgY29zbW9zLXNkawoKIyBCdWlsZCB0aGUgbGludXggYmluYXJ5IGluIC4vYnVpbGQKbWFrZSBidWlsZC1saW51eAoKIyBCdWlsZCB0ZW5kZXJtaW50L2dhaWFkbm9kZSBpbWFnZQptYWtlIGJ1aWxkLWRvY2tlci1nYWlhZG5vZGUK"}}),a._v(" "),e("h3",{attrs:{id:"运行你的测试网"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#运行你的测试网"}},[a._v("#")]),a._v(" 运行你的测试网")]),a._v(" "),e("p",[a._v("运行一个拥有 4 个节点的测试网络:")]),a._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"bWFrZSBsb2NhbG5ldC1zdGFydAo="}}),a._v(" "),e("p",[a._v("此命令使用 gaiadnode image 创建了一个 4 节点网络。每个节点的端口可以在下表中找到：")]),a._v(" "),e("table",[e("thead",[e("tr",[e("th",[e("code",[a._v("Node ID")])]),a._v(" "),e("th",[e("code",[a._v("P2P Port")])]),a._v(" "),e("th",[e("code",[a._v("RPC Port")])])])]),a._v(" "),e("tbody",[e("tr",[e("td",[e("code",[a._v("gaianode0")])]),a._v(" "),e("td",[e("code",[a._v("26656")])]),a._v(" "),e("td",[e("code",[a._v("26657")])])]),a._v(" "),e("tr",[e("td",[e("code",[a._v("gaianode1")])]),a._v(" "),e("td",[e("code",[a._v("26659")])]),a._v(" "),e("td",[e("code",[a._v("26660")])])]),a._v(" "),e("tr",[e("td",[e("code",[a._v("gaianode2")])]),a._v(" "),e("td",[e("code",[a._v("26661")])]),a._v(" "),e("td",[e("code",[a._v("26662")])])]),a._v(" "),e("tr",[e("td",[e("code",[a._v("gaianode3")])]),a._v(" "),e("td",[e("code",[a._v("26663")])]),a._v(" "),e("td",[e("code",[a._v("26664")])])])])]),a._v(" "),e("p",[a._v("更新可执行程序，只需要重新编译并重启节点:")]),a._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"bWFrZSBidWlsZC1saW51eCBsb2NhbG5ldC1zdGFydAo="}}),a._v(" "),e("h3",{attrs:{id:"配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[a._v("#")]),a._v(" 配置")]),a._v(" "),e("p",[e("code",[a._v("make localnet-start")]),a._v("命令通过调用"),e("code",[a._v("gaiad testnet")]),a._v("命令在"),e("code",[a._v("./build")]),a._v("中创建了一个 4 节点测试网络的文件。输出"),e("code",[a._v("./build")]),a._v("目录下一些文件:")]),a._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"JCB0cmVlIC1MIDIgYnVpbGQvCmJ1aWxkLwrilJzilIDilIAgZ2FpYWQK4pSc4pSA4pSAIGdhaWFkCuKUnOKUgOKUgCBnZW50eHMK4pSCICAg4pSc4pSA4pSAIG5vZGUwLmpzb24K4pSCICAg4pSc4pSA4pSAIG5vZGUxLmpzb24K4pSCICAg4pSc4pSA4pSAIG5vZGUyLmpzb24K4pSCICAg4pSU4pSA4pSAIG5vZGUzLmpzb24K4pSc4pSA4pSAIG5vZGUwCuKUgiAgIOKUnOKUgOKUgCBnYWlhZArilIIgICDilIIgICDilJzilIDilIAga2V5X3NlZWQuanNvbgrilIIgICDilIIgICDilJTilIDilIAga2V5cwrilIIgICDilJTilIDilIAgZ2FpYWQK4pSCICAgICAgIOKUnOKUgOKUgCAke0xPRzotZ2FpYWQubG9nfQrilIIgICAgICAg4pSc4pSA4pSAIGNvbmZpZwrilIIgICAgICAg4pSU4pSA4pSAIGRhdGEK4pSc4pSA4pSAIG5vZGUxCuKUgiAgIOKUnOKUgOKUgCBnYWlhZArilIIgICDilIIgICDilJTilIDilIAga2V5X3NlZWQuanNvbgrilIIgICDilJTilIDilIAgZ2FpYWQK4pSCICAgICAgIOKUnOKUgOKUgCAke0xPRzotZ2FpYWQubG9nfQrilIIgICAgICAg4pSc4pSA4pSAIGNvbmZpZwrilIIgICAgICAg4pSU4pSA4pSAIGRhdGEK4pSc4pSA4pSAIG5vZGUyCuKUgiAgIOKUnOKUgOKUgCBnYWlhZArilIIgICDilIIgICDilJTilIDilIAga2V5X3NlZWQuanNvbgrilIIgICDilJTilIDilIAgZ2FpYWQK4pSCICAgICAgIOKUnOKUgOKUgCAke0xPRzotZ2FpYWQubG9nfQrilIIgICAgICAg4pSc4pSA4pSAIGNvbmZpZwrilIIgICAgICAg4pSU4pSA4pSAIGRhdGEK4pSU4pSA4pSAIG5vZGUzCiAgICDilJzilIDilIAgZ2FpYWQKICAgIOKUgiAgIOKUlOKUgOKUgCBrZXlfc2VlZC5qc29uCiAgICDilJTilIDilIAgZ2FpYWQKICAgICAgICDilJzilIDilIAgJHtMT0c6LWdhaWFkLmxvZ30KICAgICAgICDilJzilIDilIAgY29uZmlnCiAgICAgICAg4pSU4pSA4pSAIGRhdGEK"}}),a._v(" "),e("p",[a._v("每个"),e("code",[a._v("./build/nodeN")]),a._v("目录被挂载到对应 container 的"),e("code",[a._v("/gaiad")]),a._v("目录。")]),a._v(" "),e("h3",{attrs:{id:"日志输出"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#日志输出"}},[a._v("#")]),a._v(" 日志输出")]),a._v(" "),e("p",[a._v("日志被保存在每个"),e("code",[a._v("./build/nodeN/gaiad/gaia.log")]),a._v("文件中。你也可以直接通过 Docker 来查看日志：")]),a._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"ZG9ja2VyIGxvZ3MgLWYgZ2FpYWRub2RlMAo="}}),a._v(" "),e("h3",{attrs:{id:"密钥-账户"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#密钥-账户"}},[a._v("#")]),a._v(" 密钥&账户")]),a._v(" "),e("p",[a._v("你需要使用指定节点的"),e("code",[a._v("gaiad")]),a._v("目录作为你的"),e("code",[a._v("home")]),a._v("来同"),e("code",[a._v("gaiad")]),a._v("交互，并执行查询或者创建交易:")]),a._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQga2V5cyBsaXN0IC0taG9tZSAuL2J1aWxkL25vZGUwL2dhaWFkCg=="}}),a._v(" "),e("p",[a._v("现在账户已经存在了，你可以创建新的账户并向其发送资金！")]),a._v(" "),e("p",[a._v("::: 提示\n注意：每个节点的密钥种子放在"),e("code",[a._v("./build/nodeN/gaiad/key_seed.json")]),a._v("中，可以通过"),e("code",[a._v("gaiad keys add --restore")]),a._v("命令来回复。\n:::")]),a._v(" "),e("h3",{attrs:{id:"特殊的可执行程序"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#特殊的可执行程序"}},[a._v("#")]),a._v(" 特殊的可执行程序")]),a._v(" "),e("p",[a._v("如果你拥有多个不同名称的可执行程序，则可以使用 BINARY 环境变量指定要运行的可执行程序。可执行程序的路径是相对于挂载的卷。例如：")]),a._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"IyBSdW4gd2l0aCBjdXN0b20gYmluYXJ5CkJJTkFSWT1nYWlhZm9vIG1ha2UgbG9jYWxuZXQtc3RhcnQK"}}),a._v(" "),e("h2",{attrs:{id:"多节点-远程的-自动的测试网"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#多节点-远程的-自动的测试网"}},[a._v("#")]),a._v(" 多节点，远程的，自动的测试网")]),a._v(" "),e("p",[a._v("应该从"),e("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/tree/develop/networks",target:"_blank",rel:"noopener noreferrer"}},[a._v("networks 目录"),e("OutboundLink")],1),a._v("运行下面的命令。")]),a._v(" "),e("h3",{attrs:{id:"terraform-ansible"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#terraform-ansible"}},[a._v("#")]),a._v(" Terraform & Ansible")]),a._v(" "),e("p",[a._v("使用"),e("a",{attrs:{href:"https://www.terraform.io/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Terraform"),e("OutboundLink")],1),a._v("在 AWS 上创建服务器然后用"),e("a",{attrs:{href:"https://www.ansible.com/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Ansible"),e("OutboundLink")],1),a._v("创建并管理这些服务器上的测试网来完成自动部署。")]),a._v(" "),e("h3",{attrs:{id:"前提"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前提"}},[a._v("#")]),a._v(" 前提")]),a._v(" "),e("ul",[e("li",[a._v("在一台 Linux 机器上安装"),e("a",{attrs:{href:"https://www.terraform.io/downloads.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("Terraform"),e("OutboundLink")],1),a._v("和"),e("a",{attrs:{href:"https://docs.ansible.com/ansible/latest/installation_guide/intro_installation.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("Ansible"),e("OutboundLink")],1)]),a._v(" "),e("li",[a._v("创建一个具有 EC2 实例创建能力的"),e("a",{attrs:{href:"https://docs.aws.amazon.com/general/latest/gr/managing-aws-access-keys.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("ASW API token"),e("OutboundLink")],1)]),a._v(" "),e("li",[a._v("创建 SSH 密钥")])]),a._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"ZXhwb3J0IEFXU19BQ0NFU1NfS0VZX0lEPSZxdW90OzIzNDUyMzRqazJsaDQyMzQmcXVvdDsKZXhwb3J0IEFXU19TRUNSRVRfQUNDRVNTX0tFWT0mcXVvdDsyMzRqaGtnMjM0aDUya2g0ZzVraGczNCZxdW90OwpleHBvcnQgVEVTVE5FVF9OQU1FPSZxdW90O3JlbW90ZW5ldCZxdW90OwpleHBvcnQgQ0xVU1RFUl9OQU1FPSAmcXVvdDtyZW1vdGVuZXR2YWxpZGF0b3JzJnF1b3Q7CmV4cG9ydCBTU0hfUFJJVkFURV9GSUxFPSZxdW90OyRIT01FLy5zc2gvaWRfcnNhJnF1b3Q7CmV4cG9ydCBTU0hfUFVCTElDX0ZJTEU9JnF1b3Q7JEhPTUUvLnNzaC9pZF9yc2EucHViJnF1b3Q7Cg=="}}),a._v(" "),e("p",[e("code",[a._v("terraform")]),a._v("和"),e("code",[a._v("ansible")]),a._v("都会使用到。")]),a._v(" "),e("h3",{attrs:{id:"创建一个远程网络"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建一个远程网络"}},[a._v("#")]),a._v(" 创建一个远程网络")]),a._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"U0VSVkVSUz0xIFJFR0lPTl9MSU1JVD0xIG1ha2UgdmFsaWRhdG9ycy1zdGFydAo="}}),a._v(" "),e("p",[a._v("测试网络的名称将由"),e("code",[a._v("--chain-id")]),a._v("定义，集群的名称则是 AWS 中服务器管理标识。该代码将在每个可用区中创建服务器数量的服务器，最多为 REGION_LIMIT，从 us-east-2 开始。（us-east-1 被排除在外）下面的 BaSH 脚本也是如此，但更便于输入。")]),a._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"Li9uZXctdGVzdG5ldC5zaCAmcXVvdDskVEVTVE5FVF9OQU1FJnF1b3Q7ICZxdW90OyRDTFVTVEVSX05BTUUmcXVvdDsgMSAxCg=="}}),a._v(" "),e("h3",{attrs:{id:"快速查询状态入口"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#快速查询状态入口"}},[a._v("#")]),a._v(" 快速查询状态入口")]),a._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"bWFrZSB2YWxpZGF0b3JzLXN0YXR1cwo="}}),a._v(" "),e("h3",{attrs:{id:"删除服务器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#删除服务器"}},[a._v("#")]),a._v(" 删除服务器")]),a._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"bWFrZSB2YWxpZGF0b3JzLXN0b3AK"}}),a._v(" "),e("h3",{attrs:{id:"日志输出-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#日志输出-2"}},[a._v("#")]),a._v(" 日志输出")]),a._v(" "),e("p",[a._v("你可以将日志发送到 Logz.io，一个 Elastic 栈（Elastic 搜索，Logstash 和 Kibana）服务提供商。你可以将节点设置为自动登录。创建一个帐户并从此页面上的说明中获取你的 API 密钥，然后：")]),a._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"eXVtIGluc3RhbGwgc3lzdGVtZC1kZXZlbCB8fCBlY2hvICZxdW90O1RoaXMgd2lsbCBvbmx5IHdvcmsgb24gUkhFTC1iYXNlZCBzeXN0ZW1zLiZxdW90OwphcHQtZ2V0IGluc3RhbGwgbGlic3lzdGVtZC1kZXYgfHwgZWNobyAmcXVvdDtUaGlzIHdpbGwgb25seSB3b3JrIG9uIERlYmlhbi1iYXNlZCBzeXN0ZW1zLiZxdW90OwoKZ28gZ2V0IGdpdGh1Yi5jb20vbWhlZXNlL2pvdXJuYWxiZWF0CmFuc2libGUtcGxheWJvb2sgLWkgaW52ZW50b3J5L2RpZ2l0YWxfb2NlYW4ucHkgLWwgcmVtb3RlbmV0IGxvZ3ppby55bWwgLWUgTE9HWklPX1RPS0VOPUFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaMDEyMzQ1Cg=="}}),a._v(" "),e("h3",{attrs:{id:"监控"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#监控"}},[a._v("#")]),a._v(" 监控")]),a._v(" "),e("p",[a._v("你可以安装 DataDog 代理：")]),a._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"bWFrZSBkYXRhZG9nLWluc3RhbGwK"}})],1)}),[],!1,null,null,null);t.default=o.exports}}]);