let data = sessionStorage.getItem('disclaimerShown');
if(!data) {
  alert("DISCLAIMER:" + "\n" + "The data, statements and information presented on this site is for informational purposes only, and it does not constitute financial or investment advice. Further, the financial statements presented have not undergone a comprehensive financial statement audit from a third-party professional accounting firm. As such, there may exist errors or inaccuracies that materially misstate the financial statements. We are not responsible for any financial losses or adverse outcomes that may result from making investment decisions based on the data presented herein. Further, by viewing this report you agree that the statements in this report do not constitute a representation, warranty or guaranty regarding any matter, and you are not relying thereon, but will conduct your own due diligence. You hereby release, waive and relinquish any and all claims, causes of action and disputes against Yearn Finance, its contributors, and the creators of this document. THIS REPORT DOES NOT CONSTITUTE ADVICE FOR ANY PURPOSE." + "\n" + "The forward-looking elements of this website are subject to numerous assumptions, risks and uncertainties which are subject to change over time. There are many risk factors, including those relating to blockchain and cryptographic technology generally, as well as Yearn specifically, that could cause actual results or developments anticipated by us not to be realized or, even if substantially realized, to fail to achieve any or all of the benefits that could be expected therefrom. We reserve the right to undertake no obligation to update publicly or revise any forward-looking statement, whether as a result of new information, future developments or otherwise. ACCORDINGLY, WE RECOMMEND THAT YOU DO NOT RELY ON, AND DO NOT MAKE ANY FIANCIAL DECISION OR INVESTMENT BASE ON, THE STATEMENTS CONTAINED IN THIS UPDATE – INCLUDING BUT NOT LIMITED TO ANY SELLING OR TRADING OF YFI TOKENS, EITHER OR ANY OTHER CRYPTOGRAPHIC OR BLOCKCHAIN TOKEN.");
}
  sessionStorage.setItem('disclaimerShown','true')
