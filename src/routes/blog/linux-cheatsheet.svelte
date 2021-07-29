<script>
	import Panel from '$lib/rear-white-panel.svelte';

	const title = 'Linux Cheatsheet';
	const description = 'Personal linux cheatsheet, basic security, commands, tools I like.';
	const date = 'July 16, 2021';

</script>

<svelte:head>
	<title>
		{title}
	</title>
	<meta name="description" content={description} />
</svelte:head>

<style>
	article{
		@apply ml-3;
	}
h1{
	@apply text-4xl;
	@apply underline;
	@apply mb-5;
}
h2{
	@apply text-3xl;
	@apply my-2;
}
h3{
	@apply text-2xl;
	@apply my-2;
}
ol{
	@apply list-decimal;
	@apply ml-5;
}
a {
	@apply underline;
}
ul{
	@apply list-disc;
	@apply list-inside;
	@apply ml-2;
}
table{
	@apply min-w-max;
	@apply w-full;
	@apply table-auto;
}
tr{
	@apply leading-normal;

}
th{
	@apply text-left;
	background: linear-gradient(to bottom, white, grey);

}
tr{
	@apply border-b;
	@apply border-gray-200;
}
tr:nth-child(even){
	@apply bg-gray-300;
}

</style>


<Panel>
	<article>
		<h1 >{title}</h1>

		
		<p class="text-sm text-gray-700">{date}</p>

        <h2 >Table of Contents</h2>
            <ol>
                <li><a href=#basic-security>Basic Security</a></li>
                <li><a href=#useful-commands>Useful Commands</a></li>
                <li><a href=#tools-i-like>Tools I Like</a></li>
       
            </ol>




		<h2 id="basic-security"> Basic Security</h2>

		<h3 >Automatic Updates</h3>

		<ul >
			<li>apt install unattended-upgrades</li>
			<li>dpkg-reconfigure --priority=low unattended-upgrades</li>
		</ul>
		<h3 >Non-root user</h3>

		<ul >
			<li>adduser [user]</li>
			<li>usermod -aG sudo [user]</li>
		</ul>
		<h3 >Keys</h3>

		<ul >
			<li>mkdir ~/.ssh</li>
			<li>chmod 700 ~/.ssh</li>
			<li>ssh-keygen -b [4096]</li>
			<li>ssh-copy-id [user]@[ip]</li>
		</ul>
		<h3 >Harden SSH</h3>

		<ul >
			<li>sudo nano /etc/ssh/sshd_config</li>
			<li>Port [22]</li>
			<li>AddressFamily [inet]</li>
			<li>PermitRootLogin [no]</li>
			<li>PasswordAuthentication [no]</li>
		</ul>
		<h3 >Firewall</h3>

		<ul >
			<li>sudo apt install ufw</li>
			<li>sudo ufw allow [port]</li>
			<li>sudo ufw enable</li>
			<li>sudo ufw status</li>
			<li>netstat -rn show networks accessible via the vpn</li>
			<li>sudo nano /etc/ufw/before.rules</li>
			<li>-A ufw-before-input -p icmp --icmp-type echo-request -j DROP</li>
			<li>reboot</li>
		</ul>

		<h2 id="useful-commands">Check Server</h2>

		<h3 >Service Scanning</h3>
		<table >
			<thead>
				<tr>
					<th>Command</th>
					<th>Description</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>nmap [ip] </td>
					<td>run nmap</td>
				</tr>
				<tr>
					<td>netcat [ip] [port] </td>
					<td>get banner of open port</td>
				</tr>
				<tr>
					<td>nmap -sV -sC -p- [ip] </td>
					<td>run full port, service, version scan</td>
				</tr>

			</tbody>
		</table>

		<h3 >Web Enumeration (parrot)</h3>
		<table >
			<thead>
				<tr>
					<th>Command</th>
					<th>Description</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>gobuster dir -u [ip] -w [list] </td>
					<td>directory scan</td>
				</tr>
				<tr>
					<td>gobuster dns -d [address]-w [list] </td>
					<td>subdomain scan</td>
				</tr>
				<tr>
					<td>curl -IL [ip] </td>
					<td>get website banner</td>
				</tr>
				<tr>
					<td>curl [ip]/robots.txt </td>
					<td>potentially get some directories</td>
				</tr>
			</tbody>
		</table>

		<h2 id="tools-i-like">Tools I Like</h2>

		<h3 ><a href="http://httpie.org/" target="_blank" rel="nofollow">HTTPie</a></h3>

		<p>HTTPie is a command line HTTP client, a user-friendly cURL replacement.</p>
		<p />
		<h3 >
			<a href="https://github.com/BurntSushi/ripgrep" target="_blank" rel="nofollow">Ripgrep</a>
		</h3>
		<p>Ripgrep is a fast, efficient, and accurate grep alternative.</p>
		<p>

		</p>
		<h3 >
			<a href="https://github.com/sharkdp/bat" target="_blank" rel="nofollow">Bat</a>
		</h3>
		<p>Cat clone with syntax highlighting</p>

		<h3 >
			<a href="https://github.com/chubin/cheat.sh" target="_blank" rel="nofollow">Cheat.sh</a>
		</h3>
		<p><code>curl cht.sh</code> for cheatsheets to almost anything in your terminal.</p>
	</article>
</Panel>


