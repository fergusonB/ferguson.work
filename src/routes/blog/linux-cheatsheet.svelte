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

<Panel>
	<article class="ml-3">
		<h1 class="text-4xl underline mb-5">{title}</h1>

		
		<p class="text-sm text-gray-700">{date}</p>

        <h2 class="text-3xl my-2">Table of Contents</h2>
            <ol  class="list-decimal ml-5 underline">
                <li><a href=#basic-security>Basic Security</a></li>
                <li><a href=#useful-commands>Useful Commands</a></li>
                <li><a href=#tools-i-like>Tools I Like</a></li>
       
            </ol>




		<h2 id="basic-security" class="text-3xl my-2"> Basic Security</h2>

		<h3 class="text-xl my-2">Automatic Updates</h3>

		<ul class="list-disc list-inside ml-2">
			<li>apt install unattended-upgrades</li>
			<li>dpkg-reconfigure --priority=low unattended-upgrades</li>
		</ul>
		<h3 class="text-xl my-2">Non-root user</h3>

		<ul class="list-disc list-inside ml-2">
			<li>adduser [user]</li>
			<li>usermod -aG sudo [user]</li>
		</ul>
		<h3 class="text-xl my-2">Keys</h3>

		<ul class="list-disc list-inside ml-2">
			<li>mkdir ~/.ssh</li>
			<li>chmod 700 ~/.ssh</li>
			<li>ssh-keygen -b [4096]</li>
			<li>ssh-copy-id [user]@[ip]</li>
		</ul>
		<h3 class="text-xl my-2">Harden SSH</h3>

		<ul class="list-disc list-inside ml-2">
			<li>sudo nano /etc/ssh/sshd_config</li>
			<li>Port [22]</li>
			<li>AddressFamily [inet]</li>
			<li>PermitRootLogin [no]</li>
			<li>PasswordAuthentication [no]</li>
		</ul>
		<h3 class="text-xl my-2">Firewall</h3>

		<ul class="list-disc list-inside ml-2">
			<li>sudo apt install ufw</li>
			<li>sudo ufw allow [port]</li>
			<li>sudo ufw enable</li>
			<li>sudo ufw status</li>
			<li>netstat -rn show networks accessible via the vpn</li>
			<li>sudo nano /etc/ufw/before.rules</li>
			<li>-A ufw-before-input -p icmp --icmp-type echo-request -j DROP</li>
			<li>reboot</li>
		</ul>

		<h2 id="useful-commands" class="text-3xl">Check Server</h2>

		<h3 class="text-xl my-2">Service Scanning</h3>
		<table class="table-auto ">
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

		<h3 class="text-xl my-2">Web Enumeration (parrot)</h3>
		<table class="table-auto">
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

		<h2 id="tools-i-like" class="text-3xl">Tools I Like</h2>

		<h3 class="text-xl my-2"><a href="http://httpie.org/" target="_blank" rel="nofollow">HTTPie</a></h3>

		<p>HTTPie is a command line HTTP client, a user-friendly cURL replacement.</p>
		<p />
		<h3 class="text-xl my-2">
			<a href="https://github.com/BurntSushi/ripgrep" target="_blank" rel="nofollow">Ripgrep</a>
		</h3>
		<p>Ripgrep is a fast, efficient, and accurate grep alternative.</p>
		<p>

		</p>
		<h3 class="text-xl my-2">
			<a href="https://github.com/sharkdp/bat" target="_blank" rel="nofollow">Bat</a>
		</h3>
		<p>Cat clone with syntax highlighting</p>

		<h3 class="text-xl my-2">
			<a href="https://github.com/chubin/cheat.sh" target="_blank" rel="nofollow">Cheat.sh</a>
		</h3>
		<p><code>curl cht.sh</code> for cheatsheets to almost anything in your terminal.</p>
	</article>
</Panel>
