<#import "/wcm.ftl" as wcm/>
<@wcm.header/>

<!-- WCM Wrapper content -->
<div class="wcm-wrapper-content">

    <@wcm.menu />

    <!-- Wrapper -->
    <div class="wcm-all-content">
        <div id="wcm-content" class="clearfix wcm-background">

			<div class="fluig-style-guide">
				<div class="row">
					<div class="col-xs-12 col-md-6">
						<div class="editable-slot">
						    <@wcm.renderSlot id="Slot001" editableSlot="true" />
						</div>
					</div>
					
					<div class="col-xs-12 col-md-6">
						<div class="editable-slot">
						    <@wcm.renderSlot id="Slot002" editableSlot="true" />
						</div>
					</div>
				</div>
				
				<div class="row">
					<div class="col-xs-3">
						<div class="editable-slot">
						    <@wcm.renderSlot id="Slot003" editableSlot="true" />
						</div>
					</div>
					<div class="col-xs-9">
						<div class="editable-slot">
						    <@wcm.renderSlot id="Slot004" editableSlot="true" />
						</div>
					</div>
				</div>
			</div>
			
            <@wcm.footer layoutuserlabel="wcm.layoutdefault.user" />
        </div>
    </div>
</div>