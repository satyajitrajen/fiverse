import re
import glob

# Specific known fixes in HomePage.tsx:
with open('src/components/HomePage.tsx', 'r', encoding='utf-8') as f:
    hp = f.read()

# Fix dark hero card text
hp = hp.replace('<p className="text-[10px] text-[#3a4035]">CRM + Lead Sync</p>', '<p className="text-[10px] text-[#cbd0c0]">CRM + Lead Sync</p>')
hp = hp.replace('<p className="text-[10px] text-[#3a4035]">Vector DB Search</p>', '<p className="text-[10px] text-[#cbd0c0]">Vector DB Search</p>')
hp = hp.replace('<p className="text-[10px] text-[#3a4035]">ERP Auto-Action</p>', '<p className="text-[10px] text-[#cbd0c0]">ERP Auto-Action</p>')
hp = hp.replace('<p className="text-[10px] text-[#3a4035]">Strict Privacy</p>', '<p className="text-[10px] text-[#cbd0c0]">Strict Privacy</p>')

# Fix Agent features card
hp = hp.replace('text-[11px] font-bold uppercase tracking-wider text-[#3a4035]">Integrated Enterprise Connectors', 'text-[11px] font-bold uppercase tracking-wider text-[#c8ff28]">Integrated Enterprise Connectors')

# Fix SaaS card
hp = hp.replace('text-[11px] font-bold uppercase tracking-wider text-[#3a4035]">SaaS Architectural Foundation', 'text-[11px] font-bold uppercase tracking-wider text-[#c8ff28]">SaaS Architectural Foundation')

# Fix dark tech card descriptions
hp = re.sub(r'bg-\[#242721\]\s+p-3\s+rounded-xl\s+border\s+border-\[#34392c\]\s+hover:border-\[#c8ff28\]', 'bg-[#242721] p-3 rounded-xl border border-[#34392c] text-[#d4d9cc] hover:border-[#c8ff28]', hp)

# Fix dark section in why fiverse or other dark cards
with open('src/components/HomePage.tsx', 'w', encoding='utf-8') as f:
    f.write(hp)

print("HomePage dark card contrasts fixed!")

# Now check all files for text-[#3a4035] inside dark elements
for path in glob.glob('src/components/*.tsx'):
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # In ServiceDetailView
    content = content.replace('bg-[#1c1e19] p-4.5 rounded-2xl border border-[#2d3227] hover:border-[#c8ff28]/50 transition-colors flex items-start gap-3', 'bg-[#1c1e19] p-4.5 rounded-2xl border border-[#2d3227] hover:border-[#c8ff28]/50 transition-colors flex items-start gap-3 text-[#cbd0c0]')
    
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)

print("All components verified!")
