(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{689:function(e,t,a){"use strict";a.r(t);var o=a(0),s=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"deploy-your-own-gaia-testnet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deploy-your-own-gaia-testnet"}},[e._v("#")]),e._v(" Deploy Your Own Gaia Testnet")]),e._v(" "),a("p",[e._v("This document describes 3 ways to setup a network of "),a("code",[e._v("gaiad")]),e._v(" nodes, each serving a different usecase:")]),e._v(" "),a("ol",[a("li",[e._v("Single-node, local, manual testnet")]),e._v(" "),a("li",[e._v("Multi-node, local, automated testnet")]),e._v(" "),a("li",[e._v("Multi-node, remote, automated testnet")])]),e._v(" "),a("p",[e._v("Supporting code can be found in the "),a("a",{attrs:{href:"https://github.com/cosmos/gaia/tree/main/networks",target:"_blank",rel:"noopener noreferrer"}},[e._v("networks directory"),a("OutboundLink")],1),e._v(" and additionally the "),a("code",[e._v("local")]),e._v(" or "),a("code",[e._v("remote")]),e._v(" sub-directories.")]),e._v(" "),a("blockquote",[a("p",[e._v("NOTE: The "),a("code",[e._v("remote")]),e._v(" network bootstrapping may be out of sync with the latest releases and is not to be relied upon.")])]),e._v(" "),a("h2",{attrs:{id:"available-docker-images"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#available-docker-images"}},[e._v("#")]),e._v(" Available Docker images")]),e._v(" "),a("p",[e._v("In case you need to use or deploy gaia as a container you could skip the "),a("code",[e._v("build")]),e._v(" steps and use the official images, $TAG stands for the version you are interested in:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("docker run -it -v ~/.gaia:/root/.gaia tendermint:$TAG gaiad init")])]),e._v(" "),a("li",[a("code",[e._v("docker run -it -p 26657:26657 -p 26656:26656 -v ~/.gaia:/root/.gaia tendermint:$TAG gaiad start")])]),e._v(" "),a("li",[e._v("...")]),e._v(" "),a("li",[a("code",[e._v("docker run -it -v ~/.gaia:/root/.gaia tendermint:$TAG gaiad version")])])]),e._v(" "),a("p",[e._v("The same images can be used to build your own docker-compose stack.")]),e._v(" "),a("h2",{attrs:{id:"single-node-local-manual-testnet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#single-node-local-manual-testnet"}},[e._v("#")]),e._v(" Single-node, Local, Manual Testnet")]),e._v(" "),a("p",[e._v("This guide helps you create a single validator node that runs a network locally for testing and other development related uses.")]),e._v(" "),a("h3",{attrs:{id:"requirements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/gaia-tutorials/installation.html"}},[e._v("Install gaia")])],1),e._v(" "),a("li",[a("a",{attrs:{href:"https://stedolan.github.io/jq/download/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Install "),a("code",[e._v("jq")]),a("OutboundLink")],1),e._v(" (optional)")])]),e._v(" "),a("h3",{attrs:{id:"create-genesis-file-and-start-the-network"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-genesis-file-and-start-the-network"}},[e._v("#")]),e._v(" Create Genesis File and Start the Network")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"IyBZb3UgY2FuIHJ1biBhbGwgb2YgdGhlc2UgY29tbWFuZHMgZnJvbSB5b3VyIGhvbWUgZGlyZWN0b3J5CmNkICRIT01FCgojIEluaXRpYWxpemUgdGhlIGdlbmVzaXMuanNvbiBmaWxlIHRoYXQgd2lsbCBoZWxwIHlvdSB0byBib290c3RyYXAgdGhlIG5ldHdvcmsKZ2FpYWQgaW5pdCAtLWNoYWluLWlkPXRlc3RpbmcgdGVzdGluZwoKIyBDcmVhdGUgYSBrZXkgdG8gaG9sZCB5b3VyIHZhbGlkYXRvciBhY2NvdW50CmdhaWFkIGtleXMgYWRkIHZhbGlkYXRvcgoKIyBBZGQgdGhhdCBrZXkgaW50byB0aGUgZ2VuZXNpcy5hcHBfc3RhdGUuYWNjb3VudHMgYXJyYXkgaW4gdGhlIGdlbmVzaXMgZmlsZQojIE5PVEU6IHRoaXMgY29tbWFuZCBsZXRzIHlvdSBzZXQgdGhlIG51bWJlciBvZiBjb2lucy4gTWFrZSBzdXJlIHRoaXMgYWNjb3VudCBoYXMgc29tZSBjb2lucwojIHdpdGggdGhlIGdlbmVzaXMuYXBwX3N0YXRlLnN0YWtpbmcucGFyYW1zLmJvbmRfZGVub20gZGVub20sIHRoZSBkZWZhdWx0IGlzIHN0YWtpbmcKZ2FpYWQgYWRkLWdlbmVzaXMtYWNjb3VudCAkKGdhaWFkIGtleXMgc2hvdyB2YWxpZGF0b3IgLWEpIDEwMDAwMDAwMDBzdGFrZSwxMDAwMDAwMDAwdmFsaWRhdG9ydG9rZW4KCiMgR2VuZXJhdGUgdGhlIHRyYW5zYWN0aW9uIHRoYXQgY3JlYXRlcyB5b3VyIHZhbGlkYXRvcgpnYWlhZCBnZW50eCAtLW5hbWUgdmFsaWRhdG9yCgojIEFkZCB0aGUgZ2VuZXJhdGVkIGJvbmRpbmcgdHJhbnNhY3Rpb24gdG8gdGhlIGdlbmVzaXMgZmlsZQpnYWlhZCBjb2xsZWN0LWdlbnR4cwoKIyBOb3cgaXRzIHNhZmUgdG8gc3RhcnQgYGdhaWFkYApnYWlhZCBzdGFydAo="}}),e._v(" "),a("p",[e._v("This setup puts all the data for "),a("code",[e._v("gaiad")]),e._v(" in "),a("code",[e._v("~/.gaia")]),e._v(". You can examine the genesis file you created at "),a("code",[e._v("~/.gaia/config/genesis.json")]),e._v(". With this configuration "),a("code",[e._v("gaiad")]),e._v(" is also ready to use and has an account with tokens (both staking and custom).")]),e._v(" "),a("h2",{attrs:{id:"multi-node-local-automated-testnet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#multi-node-local-automated-testnet"}},[e._v("#")]),e._v(" Multi-node, Local, Automated Testnet")]),e._v(" "),a("p",[e._v("From the "),a("a",{attrs:{href:"https://github.com/cosmos/gaia/tree/main/networks/local",target:"_blank",rel:"noopener noreferrer"}},[e._v("networks/local directory"),a("OutboundLink")],1),e._v(":")]),e._v(" "),a("h3",{attrs:{id:"requirements-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#requirements-2"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/gaia-tutorials/installation.html"}},[e._v("Install gaia")])],1),e._v(" "),a("li",[a("a",{attrs:{href:"https://docs.docker.com/engine/installation/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Install docker"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://docs.docker.com/compose/install/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Install docker-compose"),a("OutboundLink")],1)])]),e._v(" "),a("h3",{attrs:{id:"build"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#build"}},[e._v("#")]),e._v(" Build")]),e._v(" "),a("p",[e._v("Build the "),a("code",[e._v("gaiad")]),e._v(" binary (linux) and the "),a("code",[e._v("tendermint/gaiadnode")]),e._v(" docker image required for running the "),a("code",[e._v("localnet")]),e._v(" commands. This binary will be mounted into the container and can be updated rebuilding the image, so you only need to build the image once.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"IyBDbG9uZSB0aGUgZ2FpYSByZXBvCmdpdCBjbG9uZSBodHRwczovL2dpdGh1Yi5jb20vY29zbW9zL2dhaWEuZ2l0CgojIFdvcmsgZnJvbSB0aGUgU0RLIHJlcG8KY2QgZ2FpYQoKIyBCdWlsZCB0aGUgbGludXggYmluYXJ5IGluIC4vYnVpbGQKbWFrZSBidWlsZC1saW51eAoKIyBCdWlsZCB0ZW5kZXJtaW50L2dhaWFkbm9kZSBpbWFnZQptYWtlIGJ1aWxkLWRvY2tlci1nYWlhZG5vZGUK"}}),e._v(" "),a("h3",{attrs:{id:"run-your-testnet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#run-your-testnet"}},[e._v("#")]),e._v(" Run Your Testnet")]),e._v(" "),a("p",[e._v("To start a 4 node testnet run:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"bWFrZSBsb2NhbG5ldC1zdGFydAo="}}),e._v(" "),a("p",[e._v("This command creates a 4-node network using the gaiadnode image.\nThe ports for each node are found in this table:")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Node ID")]),e._v(" "),a("th",[e._v("P2P Port")]),e._v(" "),a("th",[e._v("RPC Port")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("code",[e._v("gaianode0")])]),e._v(" "),a("td",[a("code",[e._v("26656")])]),e._v(" "),a("td",[a("code",[e._v("26657")])])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("gaianode1")])]),e._v(" "),a("td",[a("code",[e._v("26659")])]),e._v(" "),a("td",[a("code",[e._v("26660")])])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("gaianode2")])]),e._v(" "),a("td",[a("code",[e._v("26661")])]),e._v(" "),a("td",[a("code",[e._v("26662")])])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("gaianode3")])]),e._v(" "),a("td",[a("code",[e._v("26663")])]),e._v(" "),a("td",[a("code",[e._v("26664")])])])])]),e._v(" "),a("p",[e._v("To update the binary, just rebuild it and restart the nodes:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"bWFrZSBidWlsZC1saW51eCBsb2NhbG5ldC1zdGFydAo="}}),e._v(" "),a("h3",{attrs:{id:"configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[e._v("#")]),e._v(" Configuration")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("make localnet-start")]),e._v(" creates files for a 4-node testnet in "),a("code",[e._v("./build")]),e._v(" by\ncalling the "),a("code",[e._v("gaiad testnet")]),e._v(" command. This outputs a handful of files in the\n"),a("code",[e._v("./build")]),e._v(" directory:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"JCB0cmVlIC1MIDIgYnVpbGQvCmJ1aWxkLwrilJzilIDilIAgZ2FpYWQK4pSc4pSA4pSAIGdlbnR4cwrilILCoMKgIOKUnOKUgOKUgCBub2RlMC5qc29uCuKUgsKgwqAg4pSc4pSA4pSAIG5vZGUxLmpzb24K4pSCwqDCoCDilJzilIDilIAgbm9kZTIuanNvbgrilILCoMKgIOKUlOKUgOKUgCBub2RlMy5qc29uCuKUnOKUgOKUgCBub2RlMArilILCoMKgIOKUlOKUgOKUgCBnYWlhZArilILCoMKgICAgICDilJzilIDilIAga2V5X3NlZWQuanNvbgrilILCoMKgICAgICDilJzilIDilIAga2V5cwrilILCoMKgICAgICDilJzilIDilIAgJHtMT0c6LWdhaWFkLmxvZ30K4pSCwqDCoCAgICAg4pSc4pSA4pSAIGNvbmZpZwrilILCoMKgICAgICDilJTilIDilIAgZGF0YQrilJzilIDilIAgbm9kZTEK4pSCwqDCoCAgICAg4pSc4pSA4pSAIGtleV9zZWVkLmpzb24K4pSCwqDCoCAgICAg4pSc4pSA4pSAICR7TE9HOi1nYWlhZC5sb2d9CuKUgsKgwqAgICAgIOKUnOKUgOKUgCBjb25maWcK4pSCwqDCoCAgICAg4pSU4pSA4pSAIGRhdGEK4pSc4pSA4pSAIG5vZGUyCuKUgsKgwqAgICAgIOKUnOKUgOKUgCBrZXlfc2VlZC5qc29uCuKUgsKgwqAgICAgIOKUnOKUgOKUgCAke0xPRzotZ2FpYWQubG9nfQrilILCoMKgICAgICDilJzilIDilIAgY29uZmlnCuKUgsKgwqAgICAgIOKUlOKUgOKUgCBkYXRhCuKUlOKUgOKUgCBub2RlMwogIMKgwqAgICAgIOKUnOKUgOKUgCBrZXlfc2VlZC5qc29uCiAgwqDCoCAgICAg4pSc4pSA4pSAICR7TE9HOi1nYWlhZC5sb2d9CiAgwqDCoCAgICAg4pSc4pSA4pSAIGNvbmZpZwogIMKgICAgICAg4pSU4pSA4pSAIGRhdGEK"}}),e._v(" "),a("p",[e._v("Each "),a("code",[e._v("./build/nodeN")]),e._v(" directory is mounted to the "),a("code",[e._v("/gaiad")]),e._v(" directory in each container.")]),e._v(" "),a("h3",{attrs:{id:"logging"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#logging"}},[e._v("#")]),e._v(" Logging")]),e._v(" "),a("p",[e._v("Logs are saved under each "),a("code",[e._v("./build/nodeN/gaiad/gaia.log")]),e._v(". You can also watch logs\ndirectly via Docker, for example:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"ZG9ja2VyIGxvZ3MgLWYgZ2FpYWRub2RlMAo="}}),e._v(" "),a("h3",{attrs:{id:"keys-accounts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keys-accounts"}},[e._v("#")]),e._v(" Keys & Accounts")]),e._v(" "),a("p",[e._v("To interact with "),a("code",[e._v("gaiad")]),e._v(" and start querying state or creating txs, you use the\n"),a("code",[e._v("gaiad")]),e._v(" directory of any given node as your "),a("code",[e._v("home")]),e._v(", for example:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQga2V5cyBsaXN0IC0taG9tZSAuL2J1aWxkL25vZGUwL2dhaWFkCg=="}}),e._v(" "),a("p",[e._v("Now that accounts exists, you may create new accounts and send those accounts\nfunds!")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",[a("strong",[e._v("Note")]),e._v(": Each node's seed is located at "),a("code",[e._v("./build/nodeN/gaiad/key_seed.json")]),e._v(" and can be restored to the CLI using the "),a("code",[e._v("gaiad keys add --restore")]),e._v(" command")])]),e._v(" "),a("h3",{attrs:{id:"special-binaries"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#special-binaries"}},[e._v("#")]),e._v(" Special Binaries")]),e._v(" "),a("p",[e._v("If you have multiple binaries with different names, you can specify which one to run with the BINARY environment variable. The path of the binary is relative to the attached volume. For example:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"IyBSdW4gd2l0aCBjdXN0b20gYmluYXJ5CkJJTkFSWT1nYWlhZm9vIG1ha2UgbG9jYWxuZXQtc3RhcnQK"}}),e._v(" "),a("h2",{attrs:{id:"multi-node-remote-automated-testnet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#multi-node-remote-automated-testnet"}},[e._v("#")]),e._v(" Multi-Node, Remote, Automated Testnet")]),e._v(" "),a("p",[e._v("The following should be run from the "),a("a",{attrs:{href:"https://github.com/cosmos/gaia/tree/main/networks",target:"_blank",rel:"noopener noreferrer"}},[e._v("networks directory"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"terraform-ansible"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#terraform-ansible"}},[e._v("#")]),e._v(" Terraform & Ansible")]),e._v(" "),a("p",[e._v("Automated deployments are done using "),a("a",{attrs:{href:"https://www.terraform.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Terraform"),a("OutboundLink")],1),e._v(" to create servers on AWS then\n"),a("a",{attrs:{href:"http://www.ansible.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ansible"),a("OutboundLink")],1),e._v(" to create and manage testnets on those servers.")]),e._v(" "),a("h3",{attrs:{id:"prerequisites"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),a("ul",[a("li",[e._v("Install "),a("a",{attrs:{href:"https://www.terraform.io/downloads.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Terraform"),a("OutboundLink")],1),e._v(" and "),a("a",{attrs:{href:"http://docs.ansible.com/ansible/latest/installation_guide/intro_installation.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ansible"),a("OutboundLink")],1),e._v(" on a Linux machine.")]),e._v(" "),a("li",[e._v("Create an "),a("a",{attrs:{href:"https://docs.aws.amazon.com/general/latest/gr/managing-aws-access-keys.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("AWS API token"),a("OutboundLink")],1),e._v(" with EC2 create capability.")]),e._v(" "),a("li",[e._v("Create SSH keys")])]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"ZXhwb3J0IEFXU19BQ0NFU1NfS0VZX0lEPSZxdW90OzIzNDUyMzRqazJsaDQyMzQmcXVvdDsKZXhwb3J0IEFXU19TRUNSRVRfQUNDRVNTX0tFWT0mcXVvdDsyMzRqaGtnMjM0aDUya2g0ZzVraGczNCZxdW90OwpleHBvcnQgVEVTVE5FVF9OQU1FPSZxdW90O3JlbW90ZW5ldCZxdW90OwpleHBvcnQgQ0xVU1RFUl9OQU1FPSAmcXVvdDtyZW1vdGVuZXR2YWxpZGF0b3JzJnF1b3Q7CmV4cG9ydCBTU0hfUFJJVkFURV9GSUxFPSZxdW90OyRIT01FLy5zc2gvaWRfcnNhJnF1b3Q7CmV4cG9ydCBTU0hfUFVCTElDX0ZJTEU9JnF1b3Q7JEhPTUUvLnNzaC9pZF9yc2EucHViJnF1b3Q7Cg=="}}),e._v(" "),a("p",[e._v("These will be used by both "),a("code",[e._v("terraform")]),e._v(" and "),a("code",[e._v("ansible")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"create-a-remote-network"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-a-remote-network"}},[e._v("#")]),e._v(" Create a Remote Network")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"U0VSVkVSUz0xIFJFR0lPTl9MSU1JVD0xIG1ha2UgdmFsaWRhdG9ycy1zdGFydAo="}}),e._v(" "),a("p",[e._v("The testnet name is what's going to be used in --chain-id, while the cluster name is the administrative tag in AWS for the servers. The code will create SERVERS amount of servers in each availability zone up to the number of REGION_LIMITs, starting at us-east-2. (us-east-1 is excluded.) The below BaSH script does the same, but sometimes it's more comfortable for input.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"Li9uZXctdGVzdG5ldC5zaCAmcXVvdDskVEVTVE5FVF9OQU1FJnF1b3Q7ICZxdW90OyRDTFVTVEVSX05BTUUmcXVvdDsgMSAxCg=="}}),e._v(" "),a("h3",{attrs:{id:"quickly-see-the-status-endpoint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#quickly-see-the-status-endpoint"}},[e._v("#")]),e._v(" Quickly see the /status Endpoint")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"bWFrZSB2YWxpZGF0b3JzLXN0YXR1cwo="}}),e._v(" "),a("h3",{attrs:{id:"delete-servers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#delete-servers"}},[e._v("#")]),e._v(" Delete Servers")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"bWFrZSB2YWxpZGF0b3JzLXN0b3AK"}}),e._v(" "),a("h3",{attrs:{id:"logging-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#logging-2"}},[e._v("#")]),e._v(" Logging")]),e._v(" "),a("p",[e._v("You can ship logs to Logz.io, an Elastic stack (Elastic search, Logstash and Kibana) service provider. You can set up your nodes to log there automatically. Create an account and get your API key from the notes on "),a("a",{attrs:{href:"https://app.logz.io/#/dashboard/data-sources/Filebeat",target:"_blank",rel:"noopener noreferrer"}},[e._v("this page"),a("OutboundLink")],1),e._v(", then:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"eXVtIGluc3RhbGwgc3lzdGVtZC1kZXZlbCB8fCBlY2hvICZxdW90O1RoaXMgd2lsbCBvbmx5IHdvcmsgb24gUkhFTC1iYXNlZCBzeXN0ZW1zLiZxdW90OwphcHQtZ2V0IGluc3RhbGwgbGlic3lzdGVtZC1kZXYgfHwgZWNobyAmcXVvdDtUaGlzIHdpbGwgb25seSB3b3JrIG9uIERlYmlhbi1iYXNlZCBzeXN0ZW1zLiZxdW90OwoKZ28gZ2V0IGdpdGh1Yi5jb20vbWhlZXNlL2pvdXJuYWxiZWF0CmFuc2libGUtcGxheWJvb2sgLWkgaW52ZW50b3J5L2RpZ2l0YWxfb2NlYW4ucHkgLWwgcmVtb3RlbmV0IGxvZ3ppby55bWwgLWUgTE9HWklPX1RPS0VOPUFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaMDEyMzQ1Cg=="}}),e._v(" "),a("h3",{attrs:{id:"monitoring"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#monitoring"}},[e._v("#")]),e._v(" Monitoring")]),e._v(" "),a("p",[e._v("You can install the DataDog agent with:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"bWFrZSBkYXRhZG9nLWluc3RhbGwK"}})],1)}),[],!1,null,null,null);t.default=s.exports}}]);