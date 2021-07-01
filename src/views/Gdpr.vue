<template>
  <div>
    <v-container> </v-container>
    <div></div>
    <div>
      <v-container>
        <v-row class="mb-6" justify="center" no-gutters>
          <v-col
            lg="3"
            v-if="
              !$vuetify.breakpoint.md &&
                !$vuetify.breakpoint.sm &&
                !$vuetify.breakpoint.xs
            "
          >
            <div class="sticky-card">
              <h1 class="pb-4">RGPD</h1>
              <v-card class="pa-5" max-width="450">
                <div>
                  <v-list-item two-line href="#1">
                    <v-list-item-content> Nous contacter </v-list-item-content>
                  </v-list-item>
                  <v-divider></v-divider>
                  <v-list-item two-line href="#2">
                    <v-list-item-content>
                      Recueillement des informations
                    </v-list-item-content>
                  </v-list-item>
                  <v-divider></v-divider>
                  <v-list-item two-line href="#3">
                    <v-list-item-content>
                      Utilisation de vos informations
                    </v-list-item-content>
                  </v-list-item>
                  <v-divider></v-divider>
                  <v-list-item two-line href="#4">
                    <v-list-item-content>
                      Conservation de vos données
                    </v-list-item-content>
                  </v-list-item>
                  <v-divider></v-divider>
                  <v-list-item two-line href="#5">
                    <v-list-item-content>
                      Divulgation de vos données
                    </v-list-item-content>
                  </v-list-item>
                  <v-divider></v-divider>
                  <v-list-item two-line href="#6">
                    <v-list-item-content>
                      Transfert de vos informations
                    </v-list-item-content>
                  </v-list-item>
                  <v-divider></v-divider>
                  <v-list-item two-line href="#7">
                    <v-list-item-content>
                      Communications relatives à la recherche utilisateur
                    </v-list-item-content>
                  </v-list-item>
                  <v-divider></v-divider>
                  <v-list-item two-line href="#8">
                    <v-list-item-content> Sécurité </v-list-item-content>
                  </v-list-item>
                  <v-divider></v-divider>
                  <v-list-item two-line href="#9">
                    <v-list-item-content> Vos droits </v-list-item-content>
                  </v-list-item>
                  <v-divider></v-divider>
                  <v-list-item two-line href="#10">
                    <v-list-item-content>
                      Modifications relatives à la politique de confidentialité
                    </v-list-item-content>
                  </v-list-item>
                  <v-divider></v-divider>
                  <v-list-item two-line href="#11">
                    <v-list-item-content> Plaintes </v-list-item-content>
                  </v-list-item>
                </div>
              </v-card>
            </div>
          </v-col>
          <v-col lg="6">
            <v-spacer class="pt-16"></v-spacer>
            <div>
              <h1
                v-if="!$vuetify.breakpoint.xl && !$vuetify.breakpoint.lg"
                class="pb-4 d-flex justify-center"
              >
                RGPD
              </h1>
              <v-card class="mx-auto pa-5" max-width="750">
                <div>
                  <div>
                    <div>
                      <div>
                        <div>
                          <p>
                            Roofoods Ltd («<strong> nous</strong> », «
                            <strong>notre</strong> », ou «
                            <strong>CESI'EAT</strong> ») s'engage à protéger
                            votre vie privée et la confidentialité de vos
                            données personnelles lors de votre participation à
                            nos projets recherche utilisateur, comme décrit dans
                            le Document d'Informations relatif à la Recherche
                            Utilisateur ou dans l'Enquête en Ligne («
                            <strong>Projet Recherche Utilisateur</strong> »).
                            Les informations personnelles sont des informations
                            qui vous identifient personnellement, telles que
                            votre nom, votre photo, vos coordonnées ou des
                            données pouvant être associées à ces informations,
                            telles que les réponses que vous donnez lors d'une
                            séance de recherche ou d'une enquête, identifiables
                            comme étant les vôtres («
                            <strong>informations</strong> »).
                          </p>
                          <p>&nbsp;</p>
                          <p>
                            Veuillez lire la présente politique de
                            confidentialité qui explique comment notre équipe
                            Recherche Utilisateur utilise et protège vos
                            informations. Nous serons le “responsable de
                            traitement” des informations que vous nous
                            fournissez.
                          </p>
                        </div>
                        <div>
                          <div>
                            <h2 id="nous-contacter">NOUS CONTACTER</h2>
                            <div id="1" class="href2"></div>
                            <p>
                              Pour tout renseignement supplémentaire ou si vous
                              avez des questions concernant la présente
                              Politique de Confidentialité ou sur la manière
                              dont nous traitons vos données personnelles plus
                              généralement, veuillez contacter :
                            </p>
                            <ul>
                              <li>
                                notre équipe de Recherche Utilisateur :
                                <a href="mailto:research@cesieat.com"
                                  >research@cesieat.com</a
                                >
                              </li>
                              <li>
                                notre délégué à la protection des données :
                                <a href="mailto:dpo@cesieat.com"
                                  >dpo@cesieat.com</a
                                >
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div>
                          <div>
                            <h2 id="recuperation">
                              COMMENT RECUEILLONS-NOUS VOS INFORMATIONS ET DE
                              QUELLES INFORMATIONS S’AGIT-IL&nbsp; ?
                            </h2>
                            <div id="2" class="href"></div>
                            <p>
                              Les informations que nous recueillons auprès de
                              vous dépendent de la catégorie de participants à
                              laquelle vous appartenez. En règle générale, les
                              informations seront différentes selon si vous êtes
                              un client, un livreur, un employé, un agent du
                              service client ou un employé / représentant d’un
                              restaurant partenaire avec CESI'EAT, ou encore si
                              vous n’avez aucune relation existante avec
                              CESI'EAT. Nous recueillons généralement des
                              informations vous concernant lors du processus de
                              recrutement pour participer à un Projet Recherche
                              Utilisateur et lorsque vous participez à ce type
                              de projet. Toutefois, si vous entretenez déjà une
                              relation avec CESI'EAT, certaines des informations
                              que nous détenons à votre sujet aux fins de la
                              Recherche Utilisateur sont recueillies à partir de
                              différentes interactions, comme décrit dans la
                              politique de confidentialité de CESI'EAT. Plus de
                              détails vous sont apportés ci-dessous.
                            </p>
                          </div>
                          <div>
                            <p><strong>Tous les participants</strong></p>
                            <ul>
                              <li>
                                Si vous participez à une enquête de recherche,
                                il est possible que nous enregistrions le fait
                                que vous ayez cliqué sur le lien de cette
                                enquête dans un e-mail que nous vous avons
                                envoyé. Toutefois, nous n'enregistrerons votre
                                identité <em>ainsi que</em> vos réponses qu'une
                                fois vous l'avoir indiqué et si cela est
                                nécessaire pour la recherche. Nous recueillerons
                                et stockerons également vos réponses au sondage,
                                sauf si nous travaillons avec un partenaire de
                                recherche qui le fera pour nous séparément.
                              </li>
                              <li>
                                Si vous participez à une séance de recherche ou
                                à une étude, vous nous communiquez vos
                                informations lorsque vous avez terminé de
                                compléter la documentation du Projet Recherche
                                Utilisateur, cela inclura notamment vos
                                coordonnées. Vous nous communiquez également vos
                                informations pendant cette même séance de
                                recherche. Il s’agit d’informations telles que
                                vos réponses écrites, vos images, vos
                                enregistrements sonores, vos enregistrements
                                vidéo, vos notes écrites, vos transcriptions et
                                rapports électroniques. Le type spécifique de
                                données recueillies pour le Projet Recherche
                                Utilisateur auquel vous participez est défini
                                dans le Document d'Informations et le Formulaire
                                de Consentement.
                              </li>
                              <li>
                                Vous nous communiquez également vos informations
                                lorsque vous interagissez avec nous par
                                téléphone, e-mail, courrier, via notre chat en
                                direct ou à travers les médias sociaux.
                              </li>
                              <li>
                                Nous travaillons parfois avec des agences
                                partenaires qui nous aident à identifier les
                                personnes les plus adaptées pour la Recherche
                                Utilisateur. Il s'agit généralement d'agences de
                                recrutement pour la recherche ou de spécialistes
                                de la recherche qui obtiennent par leurs propres
                                moyens vos coordonnées et les partagent avec
                                CESI'EAT, si vous avez accepté de participer à
                                la Recherche Utilisateur CESI'EAT. Les
                                informations que nous recevons de ces agents
                                incluent généralement votre nom, vos
                                coordonnées, votre adresse et des informations
                                démographiques, votre profession, votre
                                comportement en matière de commande, votre
                                adresse e-mail, la confirmation de votre
                                relation avec CESI'EAT et le fait que vous avez
                                accepté de participer à la Recherche
                                Utilisateur.
                              </li>
                            </ul>
                            <p>
                              <strong
                                >De plus, en fonction de votre relation avec
                                CESI'EAT, nous traitons les informations
                                suivantes :</strong
                              >
                            </p>
                            <p>
                              <strong>Si vous êtes client CESI'EAT</strong>
                            </p>
                            <ul>
                              <li>
                                Nous détenons des informations sur le(s)
                                compte(s) client et vos commandes, issues de
                                votre utilisation des services, applications et
                                sites Web CESI'EAT, conformément à la Politique
                                de Confidentialité de CESI'EAT (disponible sur
                                la page d'accueil de CESI'EAT). Il s’agit
                                généralement d’informations comprenant votre
                                nom, vos coordonnées, votre adresse et votre
                                comportement en matière de commande.
                              </li>
                            </ul>
                            <p>
                              <strong>Si vous êtes livreur CESI'EAT</strong>
                            </p>
                            <ul>
                              <li>
                                Nous conservons vos informations en termes de
                                profil et d’activité de livreur qui révèlent
                                votre rôle en tant que livreur CESI'EAT,
                                conformément à la Politique de Confidentialité
                                des Livreurs CESI'EAT (disponible sur le site
                                Web de la communauté CESI'EAT Roo). Il s'agit
                                généralement d'informations comprenant votre
                                nom, vos coordonnées et les détails /
                                statistiques de livraison de commande.
                              </li>
                            </ul>
                            <p>
                              <strong
                                >Si vous êtes gérant (ou employé) d’un
                                restaurant partenaire avec CESI'EAT</strong
                              >
                            </p>
                            <ul>
                              <li>
                                Nous recueillons des informations vous
                                concernant auprès du restaurant partenaire de
                                CESI'EAT auquel vous êtes affilié lorsque vous
                                ou votre restaurant répondez à notre demande de
                                participation à la Recherche Utilisateur. Il
                                s'agit généralement d'informations comprenant
                                votre nom, vos coordonnées et votre rôle dans le
                                restaurant partenaire avec CESI'EAT.
                              </li>
                            </ul>
                            <p>
                              <strong>Si vous êtes employé CESI'EAT</strong>
                            </p>
                            <ul>
                              <li>
                                Nous conservons des informations vous concernant
                                provenant de votre rôle en tant qu'employé
                                CESI'EAT, conformément à la Politique de
                                Confidentialité des employés de CESI'EAT
                                (disponible sur le portail CESI'EAT People).
                                Cela inclut généralement des informations telles
                                que votre nom, votre rôle chez CESI'EAT, les
                                outils de CESI'EAT que vous utilisez et vos
                                coordonnées professionnelles.
                              </li>
                            </ul>
                            <p>
                              <strong
                                >Si vous êtes agent du service clientèle
                                CESI'EAT</strong
                              >
                            </p>
                            <ul>
                              <li>
                                Nous conservons des informations vous concernant
                                à partir de votre profil en tant qu'agent du
                                service client CESI'EAT. Cela inclut
                                généralement les informations que nous avons
                                reçues de l'agence pour laquelle vous travaillez
                                ou des équipes internes de CESI'EAT, comme
                                l'équipe Service Client par exemple. Ces
                                informations incluent votre nom, les outils
                                CESI'EAT que vous utilisez et vos coordonnées
                                professionnelles.
                              </li>
                            </ul>
                            <p>
                              <strong
                                >Si vous n’avez aucune relation existante avec
                                CESI'EAT&nbsp;</strong
                              >
                            </p>
                            <ul>
                              <li>
                                Nous ne serons en possession d'aucune de vos
                                informations. Par conséquent, une fois que vous
                                aurez indiqué votre volonté de participer, nous
                                ne traiterons que les informations fournies par
                                l'organisme de recherche partenaire ou par
                                vous-même au cours du Projet Recherche
                                Utilisateur.
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div>
                          <div>
                            <h2 id="information">
                              COMMENT ET POURQUOI UTILISONS-NOUS VOS
                              INFORMATIONS ?
                            </h2>
                            <div id="3" class="href"></div>
                            <p></p>
                            <p>
                              Nous ne traiterons les données que nous
                              recueillons à votre sujet que s'il existe une
                              raison de le faire et si cette raison est
                              autorisée par la loi sur la protection des
                              données. Nous disposerons d'une base légale pour
                              le traitement de vos informations si nous avons
                              votre consentement ou si nous avons un motif
                              légitime pour le traitement de vos données.&nbsp;
                            </p>
                          </div>
                          <div>
                            <p>
                              <strong
                                >Dans les cas où nous avons votre consentement
                                :</strong
                              >
                            </p>
                            <ul>
                              <li>
                                Si vous participez à une Séance ou Etude de
                                Recherche Utilisateur (plutôt qu’à une simple
                                enquête), nous et / ou notre partenaire de
                                recherche traiterons vos informations afin de
                                mener la recherche avec vous, conformément à la
                                présente Politique de Confidentialité, au
                                Document d'Informations du projet et au
                                Formulaire de Consentement que vous avez rempli
                                pour le projet spécifique.
                              </li>
                              <li>
                                Si vous participez à une enquête de recherche en
                                ligne (par opposition à une Séance ou Etude de
                                Recherche Utilisateur), votre participation à
                                l'enquête sera considérée comme l’indication de
                                votre consentement pour nous, et / ou pour notre
                                partenaire de recherche, à traiter vos
                                informations fournies dans cette enquête. Ces
                                informations seront recueillies, stockées et
                                analysées afin de développer et améliorer les
                                activités et les services de CESI'EAT, comme
                                décrit plus en détails dans l'introduction de
                                chaque enquête.
                              </li>
                              <li>
                                Nous et / ou notre partenaire de recherche
                                traitons vos informations pour analyser les
                                résultats du Projet Recherche Utilisateur et
                                pour utiliser ces résultats dans le but de
                                développer et améliorer les activités et les
                                services de CESI'EAT.
                              </li>
                              <li>
                                Nous et / ou notre partenaire de recherche vous
                                contacterons, si vous y avez consenti,&nbsp; au
                                sujet de votre participation à de futurs Projets
                                Recherche Utilisateur.
                              </li>
                            </ul>
                            <p>
                              <strong
                                >Dans les cas où nous avons un intérêt
                                commercial légitime :</strong
                              >
                            </p>
                            <ul>
                              <li>
                                Nous ou l'un de nos partenaires, utiliserons vos
                                informations pour vous contacter au sujet d'un
                                Projet Recherche Utilisateur auquel vous avez
                                accepté de participer, avant qu'il ne commence.
                                Cela peut servir à une évaluation plus
                                approfondie de votre aptitude ou à vous fournir
                                des informations pertinentes supplémentaires.
                              </li>
                              <li>
                                Nous utiliserons vos informations pour permettre
                                à notre équipe d'assistance de vous aider avec
                                toutes vos questions ou plaintes de la manière
                                la plus efficace possible et afin de conserver
                                des archives.
                              </li>
                              <li>
                                Nous utiliserons vos informations pour vous
                                contacter afin de recueillir votre avis et vos
                                commentaires sur le processus de Recherche
                                Utilisateur auquel vous avez participé.
                              </li>
                              <li>
                                Nous vous ferons parvenir des communications
                                vous demandant de participer à un autre Projet
                                Recherche Utilisateur lorsque nous avons déjà
                                une établi une relation avec vous ou si vous
                                avez déjà participé à notre Recherche
                                Utilisateur et que vous n'avez pas choisi de ne
                                plus recevoir de communications de notre part.
                              </li>
                              <li>
                                Le cas échéant, nous pouvons utiliser vos
                                informations pour exercer ou défendre des
                                actions en justice ou pour exercer et protéger
                                les droits de CESI'EAT, des partenaires de
                                restauration, des clients ou d’autres personnes,
                                notamment pour déterminer notre degré de
                                responsabilité.
                              </li>
                            </ul>
                            <p>
                              <strong
                                >Dans les cas où nous sommes légalement tenus de
                                traiter vos informations :</strong
                              >
                            </p>
                            <p>Nous utiliserons vos informations pour :</p>
                            <ul>
                              <li>
                                conserver les accords et consentements relatifs
                                à un Projet Recherche Utilisateur ; et&nbsp;
                              </li>
                              <li>
                                nous conformer à toute autre obligation légale
                                ou exigence réglementaire à laquelle nous sommes
                                soumis.
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div>
                          <div>
                            <h2 id="conservation">
                              CONSERVATION DE VOS INFORMATIONS
                            </h2>
                            <div id="4" class="href2"></div>
                            <p></p>
                            <p>
                              Les informations que nous recueillons seront
                              conservées aussi longtemps que nécessaire pour
                              atteindre les objectifs décrits dans la section «
                              Comment et pourquoi utilisons-nous vos
                              informations ? » conformément à notre intérêt
                              légitime ou pendant une période spécifiquement
                              requise par les lois et règlements en vigueur,
                              telles que la conservation des informations pour
                              déclaration réglementaire.
                            </p>
                          </div>
                          <div>
                            <p>
                              Lors de la détermination des périodes de
                              conservation adéquates, nous prendrons en compte
                              des facteurs tels que :&nbsp;
                            </p>
                            <ul>
                              <li>
                                nos obligations contractuelles et nos droits
                                vis-à-vis des informations concernées ;
                              </li>
                              <li>
                                notre / nos obligation(s) légale(s), en vertu de
                                la législation applicable, de conserver les
                                données pendant un certain temps ;
                              </li>
                              <li>
                                le délai de prescription en vertu de la / des
                                loi(s) applicable(s) ;
                              </li>
                              <li>
                                nos intérêts légitimes lorsque nous avons
                                effectué des tests de mise en balance (voir la
                                section « Comment et pourquoi utilisons-nous vos
                                informations ») ;
                              </li>
                              <li>(éventuels) contentieux ; et</li>
                              <li>
                                les directives émises par les autorités de
                                protection des données compétentes.
                              </li>
                            </ul>
                            <p>
                              Dans les autres cas, vos informations seront
                              effacées ou anonymisées de manière sécurisée
                              lorsqu’elles ne seront plus utiles aux fins
                              exposées.
                            </p>
                          </div>
                        </div>
                        <div>
                          <div>
                            <h2 id="divulgation">
                              DIVULGATION DE VOS INFORMATIONS
                            </h2>
                            <div id="5" class="href2"></div>
                            <p>
                              Nous partageons vos informations dans des
                              circonstances limitées avec les membres de notre
                              groupe, les autorités gouvernementales, nos
                              fournisseurs et d'autres tiers de confiance.
                              Lorsque ces informations sont partagées, nous
                              prenons des mesures pour qu’elles ne soient
                              utilisées qu'aux fins décrites dans la présente
                              politique de confidentialité.
                            </p>
                          </div>
                          <div>
                            <ul>
                              <li>
                                Nous partageons vos informations avec les autres
                                sociétés du groupe CESI'EAT uniquement lorsque
                                cela est nécessaire aux fins énoncées dans la
                                présente Politique de Confidentialité.
                              </li>
                              <li>
                                Nous partageons vos informations avec nos
                                fournisseurs de confiance soumis aux contrôles
                                appropriés et conformément à la présente
                                Politique de Confidentialité. Nous partageons
                                des informations en particulier avec (en
                                fonction de chaque Projet Recherche Utilisateur)
                                :&nbsp;
                              </li>
                              <li>Nous partageons vos informations :</li>
                              <li>
                                Si notre entreprise crée une coentreprise,
                                achète ou est vendue ou fusionne avec une autre
                                entité commerciale, vos informations peuvent
                                être divulguées ou transférées à ladite société,
                                à nos nouveaux partenaires commerciaux ou aux
                                propriétaires ou à leurs conseillers. <br />
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div>
                          <div>
                            <h2 id="transfert">
                              TRANSFERT INTERNATIONAL DE VOS INFORMATIONS
                            </h2>
                            <div id="6" class="href2"></div>
                            <p>
                              Les informations que nous recueillons à votre
                              sujet sont généralement stockées sur nos serveurs
                              situés dans l’UE. Toutefois, dans certains cas,
                              les données personnelles que nous recueillons
                              auprès de vous peuvent être traitées dans des pays
                              situés hors de l'Espace Économique Européen
                              («<strong> EEE </strong>»), tels que les
                              États-Unis, les Philippines, Madagascar et les
                              pays dans lesquels CESI'EAT est présent (définis
                              sur le site
                              <a href="http://www.cesieat.com"
                                >www.cesieat.com</a
                              >). Nous veillons à ce que vos informations
                              traitées en dehors de l'EEE soient protégées de la
                              même manière que si elles étaient traitées dans
                              l'EEE. Pour ce faire, nous mettons en place des
                              mesures de sécurité et des garanties
                              appropriées.&nbsp;
                            </p>
                          </div>
                          <div>
                            <ul>
                              <li>
                                Les pays hors EEE peuvent ne pas bénéficier de
                                la même protection présente dans l'EEE en ce qui
                                concerne les données personnelles. Cependant,
                                nous sommes obligés de veiller à ce que les
                                données à caractère personnel traitées par nous
                                et nos fournisseurs en dehors de l'EEE soient
                                protégées de la même manière que si elles
                                étaient traitées dans l'EEE. Il existe donc
                                certaines garanties lorsque vos données sont
                                traitées en dehors de l'EEE.<strong> </strong
                                ><br />
                              </li>
                              <li>
                                Nous nous assurons qu’un degré de protection
                                similaire soit accordé en veillant à ce qu'au
                                moins une des garanties suivantes soit appliquée
                                :<strong> </strong><br />o&nbsp;&nbsp; nous ne
                                transférerons vos données personnelles que dans
                                des pays considérés par la Commission européenne
                                comme assurant un niveau adéquat de protection
                                des données personnelles ;
                              </li>
                            </ul>
                            <p>
                              Veuillez nous contacter en vous référant à la
                              section « Nous contacter » si vous souhaitez des
                              informations complémentaires sur les pays vers
                              lesquels des données personnelles peuvent être
                              transférées et sur le mécanisme spécifique que
                              nous utilisons lorsque nous transférons vos
                              données personnelles hors de l'EEE.
                            </p>
                          </div>
                        </div>
                        <div>
                          <div>
                            <h2 id="communications">
                              COMMUNICATIONS RELATIVES À LA RECHERCHE
                              UTILISATEUR
                            </h2>
                            <div id="7" class="href2"></div>
                            <p>
                              Si vous avez donné votre consentement ou si nous
                              avons un intérêt légitime à le faire (et que la
                              loi l’autorise), nous utiliserons vos données
                              personnelles pour vous informer des futures
                              opportunités de Recherche Utilisateur relatives à
                              nos produits et services qui pourraient vous
                              intéresser. Nous pourrons vous contacter par
                              e-mail ou par téléphone. Vous avez toujours la
                              possibilité de vous désabonner de ces
                              communications.
                            </p>
                          </div>
                        </div>
                        <div>
                          <div>
                            <h2 id="securité">SECURITÉ</h2>
                            <div id="8" class="href2"></div>
                            <p>
                              Nous adoptons des technologies et des politiques
                              efficaces pour nous assurer que les informations
                              personnelles que nous détenons à votre sujet
                              soient correctement protégées.
                            </p>
                            <p>
                              Nous prenons des mesures pour protéger vos
                              informations contre des accès non autorisés et des
                              traitements illicites, des pertes accidentelles,
                              des destructions et des dommages.
                            </p>
                            <p>
                              Malheureusement, la transmission d’informations
                              via internet n’est jamais complètement sûre. Même
                              si nous prenons des mesures pour protéger vos
                              informations, nous ne pouvons pas garantir la
                              sécurité de vos données lors de leur transmission.
                              Toute transmission est à vos propres risques. Une
                              fois que nous aurons reçu vos informations, nous
                              utiliserons des procédures rigoureuses et des
                              mesures de sécurité pour tenter d’empêcher tout
                              accès non autorisé.
                            </p>
                          </div>
                        </div>
                        <div>
                          <div>
                            <h2 id="droits">VOS DROITS</h2>
                            <div id="9" class="href2"></div>
                            <p>
                              En vertu de la loi sur la protection des données,
                              vous disposez de plusieurs droits concernant les
                              données que nous détenons à votre sujet. Si vous
                              souhaitez exercer l'un de ces droits, veuillez
                              contacter notre délégué à la protection des
                              données en utilisant les coordonnées indiquées
                              ci-dessus. Pour plus d'informations sur vos
                              droits, veuillez contacter votre autorité de
                              protection des données (voir ci-dessous).
                            </p>
                          </div>
                          <div>
                            <p>
                              <strong>Le droit à l'information. </strong>Vous
                              avez le droit de recevoir des informations
                              claires, transparentes et facilement
                              compréhensibles sur la manière dont nous utilisons
                              vos informations et vos droits quant à celles-ci.
                              C'est pour cette raison que nous vous fournissons
                              les informations contenues dans cette politique.
                            </p>
                            <p><strong>&nbsp;</strong></p>
                            <p>
                              <strong>Le droit d'accès.</strong> Vous avez le
                              droit d'obtenir l'accès à vos informations (si
                              nous les traitons). Cela vous permettra, par
                              exemple, de vérifier que nous utilisons vos
                              informations conformément à la loi sur la
                              protection des données. Si vous souhaitez accéder
                              aux informations que nous détenons à votre sujet
                              de cette manière, veuillez nous contacter (voir la
                              section « Nous contacter »).
                            </p>
                            <p>&nbsp;</p>
                            <p>
                              <strong>Le droit de rectification.</strong> Vous
                              avez le droit de faire corriger vos informations
                              si elles sont inexactes ou incomplètes. Vous
                              pouvez demander à ce que nous corrigions toute
                              erreur dans les informations que nous détenons en
                              nous contactant (voir la section « Nous contacter
                              »).
                            </p>
                            <p><strong>&nbsp;</strong></p>
                            <p>
                              <strong>Le droit d'effacement.</strong> C'est ce
                              que l'on appelle également « le droit à
                              l'oubli&nbsp;», en termes simples, cela vous
                              permet de demander le retrait ou la suppression
                              des informations personnelles que nous détenons.
                              Pour exercer ce droit, veuillez nous contacter
                              (voir la section «&nbsp;Nous contacter&nbsp;»).
                              Veuillez noter que la loi ne vous autorise pas
                              toujours à effacer toutes vos données
                              personnelles.
                            </p>
                            <p><strong>&nbsp;</strong></p>
                            <p>
                              <strong
                                >Le droit à la limitation du traitement des
                                données.</strong
                              >
                              Vous avez le droit de «&nbsp;bloquer » ou
                              «&nbsp;empêcher&nbsp;» l'utilisation ultérieure de
                              vos informations. Lorsque le traitement est
                              limité, nous pouvons toujours stocker vos
                              informations mais nous ne les utiliserons plus.
                            </p>
                            <p><strong>&nbsp;</strong></p>
                            <p>
                              <strong
                                >Le droit à la portabilité des données</strong
                              >. Vous avez le droit d'obtenir vos informations
                              dans un format accessible et transférable, de
                              sorte que vous puissiez les réutiliser à vos
                              propres fins, auprès de différents fournisseurs de
                              services. Ce n'est cependant pas un droit général
                              et il existe des exceptions. Pour en savoir plus,
                              contactez-nous (voir la section « Nous contacter
                              »).
                            </p>
                            <p><strong>&nbsp;</strong></p>
                            <p>
                              <strong>Le droit de plainte.</strong> Vous avez le
                              droit de déposer une plainte auprès de votre
                              autorité nationale de protection des données sur
                              la manière dont nous traitons vos informations.
                            </p>
                            <p>&nbsp;</p>
                            <p>
                              <strong
                                >Le droit de retrait du consentement.</strong
                              >
                              Si vous avez consenti à une ou plusieurs
                              utilisations que nous faisons de vos informations
                              (c’est-à-dire que nous nous basons sur ce
                              consentement comme base légale pour le traitement
                              de vos informations), vous avez le droit de
                              retirer votre consentement à tout moment. Pour ce
                              faire, veuillez nous contacter (voir la section «
                              Nous contacter »). Le retrait de votre
                              consentement ne rendra toutefois pas illégale
                              l’utilisation de vos informations personnelles
                              quand votre consentement était encore apparent.
                            </p>
                            <p></p>
                            <p>
                              <strong
                                >Le droit de s’opposer au traitement</strong
                              >. Vous avez le droit de vous opposer à certains
                              types de traitement. Vous pouvez par exemple vous
                              opposez au fait de recevoir des communications en
                              vous désabonnant, comme indiqué dans la section
                              «&nbsp;Communications de Recherche
                              Utilisateur&nbsp;» ci-dessus.&nbsp;
                            </p>
                          </div>
                        </div>
                        <div>
                          <div>
                            <h2 id="confidentialité">
                              MODIFICATIONS RELATIVES À LA POLITIQUE DE
                              CONFIDENTIALITÉ
                            </h2>
                            <div id="10" class="href"></div>
                            <p>
                              Le cas échéant, nous vous informerons de tout
                              changement apporté à la présente Politique de
                              Confidentialité par e-mail ou par notification
                              push.
                            </p>
                            <p>&nbsp;</p>
                            <p>
                              La présente Politique de Confidentialité à été
                              mise à jour pour la dernière fois le X avril 2019.
                            </p>
                          </div>
                        </div>
                        <div>
                          <div>
                            <h2 id="plaintes">PLAINTES</h2>
                            <div id="11" class="href2"></div>
                            <p>
                              Si vous n'êtes pas satisfait de la manière dont
                              nous traitons vos données personnelles, veuillez
                              tout d'abord contacter notre délégué à la
                              protection des données (voir la section « Nous
                              contacter »).
                            </p>
                            <p>&nbsp;</p>
                            <p>
                              Si vous n'êtes pas satisfait de notre réponse à
                              une plainte ou si vous pensez que le traitement de
                              vos informations personnelles n'est pas conforme à
                              la loi sur la protection des données, vous pouvez
                              déposer une plainte auprès du ICO (Information
                              Commissioner’s Office)&nbsp; en utilisant les
                              informations suivantes :
                            </p>
                            <p>&nbsp;</p>
                            <p>
                              Adresse : Information Commissioner’s Office,
                              Wycliffe House, Water Lane, Wilmslow, Cheshire SK9
                              5AF
                            </p>
                            <p>Numéro de téléphone : +44 (0)303 123 1113</p>
                            <p>
                              Site Web :
                              <a href="http://www.ico.org.uk">www.ico.org.uk</a>
                            </p>
                            <p>&nbsp;</p>
                            <p>
                              Roofoods Limited : The River Building, 1 Cousin
                              Lane, London, EC4R 3TE, Royaume-Uni
                            </p>
                            <p>
                              CESI'EAT France SAS, 1 bis avenue de la
                              République, 75011 Paris, France
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </v-card>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Rgpd',
}
</script>

<style>
.sticky-card {
  top: 100px;
  position: sticky;
  padding-right: 10%;
}

.href {
  transform: translateY(-150px);
}

.href2 {
  transform: translateY(-110px);
}

h3,
h2 {
  padding-bottom: 10px;
  padding-top: 5px;
}
</style>
