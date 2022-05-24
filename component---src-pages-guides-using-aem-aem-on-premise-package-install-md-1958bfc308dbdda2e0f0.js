(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[6596],{92973:function(e,a,n){"use strict";n.r(a),n.d(a,{_frontmatter:function(){return r},default:function(){return s}});var t=n(22122),m=n(19756),i=(n(15007),n(64983)),o=n(99536),d=["components"],r={},p={_frontmatter:r},l=o.Z;function s(e){var a=e.components,n=(0,m.Z)(e,d);return(0,i.mdx)(l,(0,t.Z)({},p,n,{components:a,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"install-aio-events-aem-on-aem-on-premise"},"Install ",(0,i.mdx)("inlineCode",{parentName:"h1"},"aio-events-aem")," on AEM (on-premise)"),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"aio-aem-events")," is a classic AEM package, you have 2 main options to install it:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"you may do it manually using AEM package manager."),(0,i.mdx)("li",{parentName:"ul"},"you may automate it with ",(0,i.mdx)("inlineCode",{parentName:"li"},"maven"))),(0,i.mdx)("h2",{id:"using-aem-package-manager"},"Using AEM Package Manager"),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("p",{parentName:"li"},"Open AEM Package Manager by selecting the ",(0,i.mdx)("strong",{parentName:"p"},"Tools")," icon and then selecting ",(0,i.mdx)("strong",{parentName:"p"},"Deployment")," and ",(0,i.mdx)("strong",{parentName:"p"},"Packages"),".")),(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("p",{parentName:"li"},"In ",(0,i.mdx)("strong",{parentName:"p"},"Package Manager"),", select ",(0,i.mdx)("strong",{parentName:"p"},"Upload Package"),". Select ",(0,i.mdx)("strong",{parentName:"p"},"Browse")," and navigate to the package zip file. Select ",(0,i.mdx)("strong",{parentName:"p"},"OK"),"."),(0,i.mdx)("blockquote",{parentName:"li"},(0,i.mdx)("p",{parentName:"blockquote"},"Note: If you have an older version of the package, uninstall it and remove it to avoid potential conflicts.**."))),(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("p",{parentName:"li"},"Select ",(0,i.mdx)("strong",{parentName:"p"},"Install"),".")),(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("p",{parentName:"li"},"On the ",(0,i.mdx)("strong",{parentName:"p"},"Install Package")," dialog box, select ",(0,i.mdx)("strong",{parentName:"p"},"Merge")," from the ",(0,i.mdx)("strong",{parentName:"p"},"Access Control Handling")," drop-down list and select ",(0,i.mdx)("strong",{parentName:"p"},"Install"),".")),(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("p",{parentName:"li"},"Watch the ",(0,i.mdx)("strong",{parentName:"p"},"Activity Log"),". If installed, the log reports that the package is imported."))),(0,i.mdx)("p",null,"For more information read the ",(0,i.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/experience-manager-65/administering/contentmanagement/package-manager.html?lang=en"},"AEM package manager guide")),(0,i.mdx)("h2",{id:"using-maven"},"Using ",(0,i.mdx)("inlineCode",{parentName:"h2"},"maven")),(0,i.mdx)("p",null,"Using ",(0,i.mdx)("inlineCode",{parentName:"p"},"maven"),", you may deploy ",(0,i.mdx)("inlineCode",{parentName:"p"},"aio-aem-events")," as an embedded package within your own AEM project."),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"add ",(0,i.mdx)("inlineCode",{parentName:"li"},"aio-aem-events")," in your ",(0,i.mdx)("inlineCode",{parentName:"li"},"maven")," build ",(0,i.mdx)("inlineCode",{parentName:"li"},"dependencies")," section")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},"  <dependency>\n      <groupId>com.adobe.aio.aem</groupId>\n      <artifactId>aio-aem-events</artifactId>\n      <version>${aio-aem-events.version}</version>\n      <classifier>aem65</classifier>\n      <type>zip</type>\n  </dependency>\n")),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"add ",(0,i.mdx)("inlineCode",{parentName:"li"},"aio-aem-events")," in your ",(0,i.mdx)("inlineCode",{parentName:"li"},"maven")," build ",(0,i.mdx)("inlineCode",{parentName:"li"},"filevault-package-maven-plugin")," ",(0,i.mdx)("inlineCode",{parentName:"li"},"embedded")," ",(0,i.mdx)("inlineCode",{parentName:"li"},"configuration")," section:")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},"  <embedded>\n       <groupId>com.adobe.aio.aem</groupId>\n       <artifactId>aio-aem-events</artifactId>\n       <type>zip</type>\n       <target>/apps/mysite-packages/application/install</target>\n  </embedded>\n")),(0,i.mdx)("p",null,"For more details on embedding 3rd-party within our AEM project read ",(0,i.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/experience-manager-cloud-service/content/implementing/developing/aem-project-content-package-structure.html%3Flang%3Den#embedding-3rd-party-packages"},"AEM project structure guide"),"."),(0,i.mdx)("p",null,"If you are looking for a working sample browse ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/francoisledroff/aio-aem-events-sample/tree/aem65"},"aio-aem-events-sample")))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-using-aem-aem-on-premise-package-install-md-1958bfc308dbdda2e0f0.js.map