var partiLetter = "";
var parti = "";
var medlem  = "";
var choice = "";
var w = window.innerWidth;

$(function(){
	$(window).resize(function() {
		w = window.innerWidth;
		if (w < 1134){
			twoRows();
			$("#listeListeKnap").click(stemListe);
			$("#listePersonKnap").click(stemPersonligt);
		}
		else if(w > 1134){
			twoCells();
			$("#listeListeKnap").click(stemListe);
			$("#listePersonKnap").click(stemPersonligt);
		}
	});

	$("#confirmPartyContainer").hide();
	$("#chooseMemberContainer").hide();
	$("#backToLists").hide();
	$("#backToPL").hide();

	$(".parti .myButton").click(partiChosen);

	$("#backToLists").click(backToParties);
	$("#backToPL").click(backToPL);

	$("#listeListeKnap").click(stemListe);
	$("#listePersonKnap").click(stemPersonligt);

	$("#yesToMember").click(end);
	$("#noToMember").click(noToMember);

	$("#blank").click(function(){
		choice = "Blankt";
		end();
		$("h1").html("Du har nu stemt <br>" + choice);
	});

	if(w < 1134){
		twoRows();
	}
});

function partiChosen()
{
	parti = $(this).text();
	partiLetter = $(this).attr("id");
	//alert(partiLetter);
	$("#list").hide();
	$("#blank").hide();
	$("#backToLists").show();
	//$("#container").load("partyorpersonal.html")
	$("#confirmPartyContainer").show();
	$("h1").html("Du har markeret liste <br>" + parti);
}

function backToParties()
{
	$("#confirmPartyContainer").hide();
	$("#list").show();
	$("#blank").show();
	$("h1").text("Vælg et parti");
	$(this).hide();
}

function backToPL(){
	$("#backToLists").show();
	$("#backToPL").hide();
	$("#listeContainer").hide();
	$("#chooseMemberContainer").hide();
	$("#confirmPartyContainer").show();
	$("h1").html("Du har markeret liste <br>" + parti);
	$("#voter").remove();
}

function stemListe(){
	$("#confirmPartyContainer").hide();
	$("h1").html("Ønsker du at afgive din stemme på listen <br>" + parti + "?");
	$("#backToLists").hide();
	$("#backToPL").show();
	$("#nav").prepend("<div class=myButton id=voter style=\"display: inline-block;\">AFGIV STEMME</div>");
	$("#voter").click(voteList);
}

function voteList(){
	choice = parti;
	end();
}

function stemPersonligt()
{
	$("#backToLists").hide();
	$("#backToPL").show();
	$("#confirmPartyContainer").hide();
	switch (partiLetter)
	{
		case "A":
			$("#listeContainer").html(
				"<h2>Vælg den person du vil stemme på</h2>\
				 <div class=person><div class=myButton>Helle Thorning Smith</div></div>\
				 <div class=person><div class=myButton>Mogens Jensen</div></div>\
				 <div class=person><div class=myButton>Frank Jensen</div></div>\
				 <div class=person><div class=myButton>Henrik Dam Kristensen</div></div>\
				 <div class=person><div class=myButton>Ane Halsboe-Larsen</div></div>"
			);
			break;

		case "B":
			$("#listeContainer").html(
				"<h2>Vælg den person du vil stemme på</h2>\
				 <div class=person><div class=myButton>Carsten Bech</div></div>\
				 <div class=person><div class=myButton>Helle Bækkelund Sørensen</div></div>\
				 <div class=person><div class=myButton>Jakob Lavrsen</div></div>\
				 <div class=person><div class=myButton>Karen Melchior</div></div>\
				 <div class=person><div class=myButton>Liv Holm Andersen</div></div>\
				 <div class=person><div class=myButton>Mogens Nyholm</div></div>\
				 <div class=person><div class=myButton>Morten Østergaard</div></div>\
				 <div class=person><div class=myButton>Nils Sjøberg </div></div>"
			);
			break;

		case "C":
			$("#listeContainer").html(
				"<h2>Vælg den person du vil stemme på</h2>\
				<div class=person><div class=myButton>Brian Mikkelsen</div></div>\
				<div class=person><div class=myButton>Charlotte Dyremose</div></div>\
				<div class=person><div class=myButton> Daniel Rugholm </div></div>\
				<div class=person><div class=myButton> Lars Barfoed </div></div>\
				<div class=person><div class=myButton> Mai Mercado </div></div>\
				<div class=person><div class=myButton> Mike Legarth </div></div>\
				<div class=person><div class=myButton> Per Løkken </div></div>\
				<div class=person><div class=myButton> Per Stig Møller </div></div>");
			break;

		case "F":
			$("#listeContainer").html(
				"<h2>Vælg den person du vil stemme på</h2>\
				<div class=person><div class=myButton>Pia Olsen Dyhr</div></div>\
				<div class=person><div class=myButton>Jonas Dahl</div></div>\
				<div class=person><div class=myButton>Ozlem Cekic</div></div>\
				<div class=person><div class=myButton>Lisbeth Poulsen</div></div>\
				<div class=person><div class=myButton>Annette Vilhelmsen</div></div>\
				<div class=person><div class=myButton>Eigil Andersen</div></div>\
				<div class=person><div class=myButton>Holger K. Nielsen</div></div>\
				<div class=person><div class=myButton>Karina Lorentzen Dehnhardt</div></div>\
				<div class=person><div class=myButton>Pernille Bagge</div></div>\
				<div class=person><div class=myButton>Steen Gade</div></div>\
				<div class=person><div class=myButton>Trine Mach</div></div>\
				<div class=person><div class=myButton>Anne Baastrup</div></div>\
				<div class=person><div class=myButton>Margrete Auken</div></div>");
			break;

		case "I":
			$("#listeContainer").html(
				"<h2>Vælg den person du vil stemme på</h2>\
				<div class=person><div class=myButton>Per Zeidler</div></div>\
				<div class=person><div class=myButton>Jakob Rixen</div></div>\
				<div class=person><div class=myButton>Lars Bro</div></div>\
				<div class=person><div class=myButton>Carsten Bach</div></div>\
				<div class=person><div class=myButton>Jesper Bræmer</div></div>\
				<div class=person><div class=myButton>Annette Bolvig</div></div>\
				<div class=person><div class=myButton>Birgitte Nymann</div></div>");
			break;

		case "K":
			$("#listeContainer").html(
				"<h2>Vælg den person du vil stemme på</h2>\
				<div class=person><div class=myButton>Isabella Arendt Laursen</div></div>\
				<div class=person><div class=myButton>Mathias Mogensen Brosbøl</div></div>\
				<div class=person><div class=myButton>Svend-Erik Jørgensen</div></div>\
				<div class=person><div class=myButton>Nils-Erik Mulvad</div></div>\
				<div class=person><div class=myButton>Kristian Søndergaard Larsen</div></div>\
				<div class=person><div class=myButton>Simon Overby Kristensen</div></div>\
				<div class=person><div class=myButton>Fridtjof Stidsen</div></div>");
			break;

		case "O":
			$("#listeContainer").html(
				"<h2>Vælg den person du vil stemme på</h2>\
				<div class=person><div class=myButton>Kristian Thulesen Dahl</div></div>\
				<div class=person><div class=myButton>Peter Skaarup</div></div>\
				<div class=person><div class=myButton>Søren Espersen</div></div>\
				<div class=person><div class=myButton>Martin Henriksen</div></div>\
				<div class=person><div class=myButton>Karin Nødgaard</div></div>\
				<div class=person><div class=myButton>Pia Kjærsgaard </div></div>\
				<div class=person><div class=myButton>Pia Adelsteen</div></div>\
				<div class=person><div class=myButton>Alex Ahrendtsen</div></div>");
			break;

		case "V":
			$("#listeContainer").html(
				"<h2>Vælg den person du vil stemme på</h2>\
				<div class=person><div class=myButton>Anne-Mette Winther Christiansen</div></div>\
				<div class=person><div class=myButton>Anni Matthiesen</div></div>\
				<div class=person><div class=myButton>Bertel Haarder</div></div>\
				<div class=person><div class=myButton>Birthe Rønn Hornbech</div></div>\
				<div class=person><div class=myButton>Claus Hjort Frederiksen</div></div>\
				<div class=person><div class=myButton>Birgitte Josefsen</div></div>\
				<div class=person><div class=myButton>Ellen Trane Nørby</div></div>\
				<div class=person><div class=myButton>Erling Bonnesen</div></div>");
			break;

		case "Ø":
			$("#listeContainer").html(
				"<h2>Vælg den person du vil stemme på</h2>\
				<div class=person><div class=myButton>Christian Juhl</div></div>\
				<div class=person><div class=myButton>Finn Sørensen</div></div>\
				<div class=person><div class=myButton>Frank Aaen</div></div>\
				<div class=person><div class=myButton>Henning Hyllested</div></div>\
				<div class=person><div class=myButton>Johanne Schmidt-Nielsen</div></div>\
				<div class=person><div class=myButton>Jørgen Arbo-Bæhr</div></div>\
				<div class=person><div class=myButton>Lars Dohn</div></div>\
				<div class=person><div class=myButton>Nikolaj Villumsen</div></div>\
				<div class=person><div class=myButton>Per Clausen</div></div>\
				<div class=person><div class=myButton>Pernille Skipper</div></div>\
				<div class=person><div class=myButton>Rosa Lund</div></div>\
				<div class=person><div class=myButton>Stine Brix</div></div>");
			break;

		case "Å":
			$("#listeContainer").html(
				"<h2>Vælg den person du vil stemme på</h2>\
				<div class=person><div class=myButton>Uzma Ahmed</div></div>\
				<div class=person><div class=myButton>Uffe Elbæk</div></div>\
				<div class=person><div class=myButton>Josephine Fock</div></div>\
				<div class=person><div class=myButton>Torsten Gejl</div></div>\
				<div class=person><div class=myButton>Christian Poll</div></div>\
				<div class=person><div class=myButton>Kim Hyttel</div></div>\
				<div class=person><div class=myButton>Ulla Sandbæk</div></div>");
			break;

	}
	$("#listeContainer").show();
	$(".person .myButton").click(chooseMember);
}

function chooseMember() 
{
	medlem = $(this).text();
	choice = medlem;
	$("h1").html("Ønsker du at afgive din stemme på <br>" + medlem + "?");
	$("#listeContainer").hide();
	$("#backToPL").hide();
	$("#chooseMemberContainer").show();
}

function noToMember()
{
	$("h1").html("Du har markeret liste <br>" + parti);
	$("#chooseMemberContainer").hide();
	$("#listeContainer").show();
	$("#backToPL").show();
}

function end()
{
	$("h1").html("Du har nu stemt på <br>" + choice);
	$("#container").append("<h2>Tak for din stemme, du kan nu forlade lokalet</h2>");
	$("#chooseMemberContainer").hide();
	$("#listeContainer").hide();
	$("#confirmPartyContainer").hide();
	$("#list").hide();
	$("#blank").hide();
	$("#voter").remove();
	$("#backToPL").hide();
	setTimeout(function(){ window.location = "authentication.html"; }, 10000);
}

function twoRows(){
	$("#confirmPartyContainer").html("<h2> Ønsker du at stemme på listen eller personligt? </h2>\
			<table align=center>\
				<tr>\
					<td>\
						<div id=listeListeKnap>\
							<div class=myButton id=stemLister> STEM PÅ LISTEN</div>\
							<img id=voteList src=list.png alt=Liste>\
						</div>\
					</td>\
				</tr>\
				<tr>\
					<td>\
						<div id=listePersonKnap>\
							<div class=myButton id=stemPerson>STEM PERSONLIGT</div>\
							<img id=votePerson src=person.png alt=Person>\
						</div>\
					</td>\
				</tr>\
			</table>")
	$("#listePersonKnap").css("margin-top", "55");
	$("#confirmPartyContainer").css("height", "759px");
}

function twoCells(){
	$("#confirmPartyContainer").html("<h2> Ønsker du at stemme på listen eller personligt? </h2>\
			<table align=center>\
				<tr>\
					<td>\
						<div id=listeListeKnap>\
							<div class=myButton id=stemLister> STEM PÅ LISTEN</div>\
							<img id=voteList src=list.png alt=Liste>\
						</div>\
					</td>\
					<td>\
						<div id=listePersonKnap>\
							<div class=myButton id=stemPerson>STEM PERSONLIGT</div>\
							<img id=votePerson src=person.png alt=Person>\
						</div>\
					</td>\
				</tr>\
			</table>")
	$("#listePersonKnap").css("margin-top", "6");
	$("#confirmPartyContainer").css("height", "417px");
}