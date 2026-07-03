import React, { useState } from 'react';
import { Sparkles, Copy, Check, Box, Palette, Sun, Layout, Cpu, Zap, Info, ChevronDown, ChevronUp } from 'lucide-react';

const PromptGenerator = () => {
  const [style, setStyle] = useState('Art Deco');
  const [material, setMaterial] = useState('Frosted Glass & Gold');
  const [lighting, setLighting] = useState('Volumetric Cinematic');
  const [setting, setSetting] = useState('Minimalist Gallery');
  const [size, setSize] = useState('Large-scale Monumental');
  const [audience, setAudience] = useState('High-end Luxury Seekers');
  const [model, setModel] = useState('Midjourney v6.1');
  const [gpu, setGpu] = useState('NVIDIA RTX 4090 (24GB)');
  const [extraDetails, setExtraDetails] = useState('');
  const [copied, setCopied] = useState(false);
  const [showGuide, setShowGuide] = useState(false);

  const styles = ['Art Deco', 'Bio-Futurism', 'Neo-Classical', 'Cyber-Deco', 'Organic Minimalist', 'Mid-Century Modern', 'Parametric Fluidity', 'Industrial Grunge'];
  const materials = ['Frosted Glass & Gold', 'Iridescent Acrylic', 'Polished Chrome & Marble', 'Raw Concrete & Neon', 'Velvet & Brass', 'Liquid Metal', 'Translucent Resin', 'Sustainable Bamboo & Copper'];
  const lightings = ['Volumetric Cinematic', 'Soft Ambient Glow', 'High-Contrast Studio', 'Cyberpunk Neon', 'Natural Skylight', 'Dichroic Prism Lighting', 'Golden Hour Warmth', 'Subsurface Scattering'];
  const settings = ['Minimalist Gallery', 'Luxury Hotel Lobby', 'Outdoor Zen Garden', 'Surreal Void', 'Industrial Loft', 'Futuristic Airport Terminal', 'Underwater Atrium', 'Mountain-top Retreat'];
  const sizes = ['Large-scale Monumental', 'Immersive Walk-through', 'Human-sized Focal Point', 'Table-top Sculptural', 'Ceiling-suspended Kinetic'];
  const audiences = ['High-end Luxury Seekers', 'Tech Enthusiasts', 'Art Gallery Collectors', 'Corporate Executives', 'General Public / Tourists', 'Eco-conscious Minimalists'];
  const models = ['Midjourney v6.1', 'DALL-E 3', 'Stable Diffusion XL', 'Leonardo AI (Kandinsky)', 'Adobe Firefly v3'];
  const gpus = ['NVIDIA RTX 4090 (24GB)', 'NVIDIA RTX 3090', 'A100 Tensor Core (Cloud)', 'H100 NVL (High-End Enterprise)', 'Apple M3 Max (Local Rendering)'];

  // Logic for GPU and Model Recommendations
  React.useEffect(() => {
    // High Complexity: Needs massive VRAM and advanced physics/texture handling
    if (size === 'Large-scale Monumental' || style === 'Parametric Fluidity' || material === 'Liquid Metal' || material === 'Iridescent Acrylic') {
      setGpu('H100 NVL (High-End Enterprise)');
      setModel('Midjourney v6.1');
    } 
    // Medium-High Complexity: Detail-heavy, lighting-focused
    else if (style === 'Cyber-Deco' || style === 'Industrial Grunge' || lighting === 'Dichroic Prism Lighting' || lighting === 'Subsurface Scattering') {
      setGpu('NVIDIA RTX 4090 (24GB)');
      setModel('Stable Diffusion XL');
    } 
    // Medium Complexity: Standard high-end rendering
    else if (style === 'Neo-Classical' || material === 'Polished Chrome & Marble') {
      setGpu('NVIDIA RTX 3090');
      setModel('Adobe Firefly v3');
    }
    // Mobile/Local Efficiency: Optimized for lower compute
    else if (size === 'Table-top Sculptural' || style === 'Organic Minimalist') {
      setGpu('Apple M3 Max (Local Rendering)');
      setModel('DALL-E 3');
    }
  }, [style, size, material, lighting]);

  // Fallback for GPU using Nullish Coalescing (best practice for null/undefined)
  const gpuSafe = gpu ?? 'High-performance GPU';

  const generatedPrompt = `A high-end 3D rendition of a ${size} ${style} decorative installation, designed to appeal to ${audience}. The structure is crafted from ${material}, featuring intricate patterns and unique forms. ${extraDetails ? `Additional features: ${extraDetails}. ` : ''}Set within a ${setting}, illuminated by ${lighting} lighting that emphasizes textures and reflections. Optimized for ${model} rendering with ${gpuSafe} compute acceleration. Rendered in 8k resolution, Unreal Engine 5 style, hyper-realistic, architectural photography, sharp focus, Octane render --v 6.1`;

  // Real-time tracking of the prompt and GPU status
  console.log("Raw GPU Value:", gpu);
  console.log("Fallback Applied (gpuSafe):", gpuSafe);
  console.log("Full Generated Prompt:", generatedPrompt);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedPrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col h-full bg-slate-50 p-6 font-sans">
      <div className="max-w-2xl mx-auto w-full space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-slate-900 flex items-center justify-center gap-2">
            <Sparkles className="text-blue-500" /> 3D Installation Prompt Pro
          </h1>
          <p className="text-slate-600 mt-2">Fine-tune your installation parameters to generate a high-fidelity AI prompt.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
              <Palette size={16} /> Artistic Style
            </label>
            <select 
              className="w-full p-2 border rounded-md bg-slate-50 border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none"
              value={style}
              onChange={(e) => setStyle(e.target.value)}
            >
              {styles.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
              <Box size={16} /> Primary Materials
            </label>
            <select 
              className="w-full p-2 border rounded-md bg-slate-50 border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none"
              value={material}
              onChange={(e) => setMaterial(e.target.value)}
            >
              {materials.map(m => <option key={m} value={m}>{m}</option>)}
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
              <Sun size={16} /> Lighting Mood
            </label>
            <select 
              className="w-full p-2 border rounded-md bg-slate-50 border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none"
              value={lighting}
              onChange={(e) => setLighting(e.target.value)}
            >
              {lightings.map(l => <option key={l} value={l}>{l}</option>)}
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
              <Layout size={16} /> Environment
            </label>
            <select 
              className="w-full p-2 border rounded-md bg-slate-50 border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none"
              value={setting}
              onChange={(e) => setSetting(e.target.value)}
            >
              {settings.map(env => <option key={env} value={env}>{env}</option>)}
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
              <Box size={16} /> Size / Dimensions
            </label>
            <select 
              className="w-full p-2 border rounded-md bg-slate-50 border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none"
              value={size}
              onChange={(e) => setSize(e.target.value)}
            >
              {sizes.map(sz => <option key={sz} value={sz}>{sz}</option>)}
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
              <Sparkles size={16} /> Target Audience
            </label>
            <select 
              className="w-full p-2 border rounded-md bg-slate-50 border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none"
              value={audience}
              onChange={(e) => setAudience(e.target.value)}
            >
              {audiences.map(aud => <option key={aud} value={aud}>{aud}</option>)}
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
              <Zap size={16} className="text-yellow-500" /> AI Model / GPT
            </label>
            <select 
              className="w-full p-2 border rounded-md bg-slate-50 border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none"
              value={model}
              onChange={(e) => setModel(e.target.value)}
            >
              {models.map(m => <option key={m} value={m}>{m}</option>)}
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700 flex items-center justify-between">
              <span className="flex items-center gap-2"><Cpu size={16} className="text-purple-500" /> Suggested GPU</span>
              <button 
                onClick={() => setGpu(null)}
                className="text-[10px] text-red-500 hover:underline"
              >
                Simulate Null
              </button>
            </label>
            <select 
              className="w-full p-2 border rounded-md bg-slate-50 border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none"
              value={gpu || ''}
              onChange={(e) => setGpu(e.target.value)}
            >
              {!gpu && <option value="">--- Fallback Active ---</option>}
              {gpus.map(g => <option key={g} value={g}>{g}</option>)}
            </select>
          </div>

          <div className="space-y-2 md:col-span-2">
            <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
              <Sparkles size={16} className="text-blue-500" /> Custom Details (comma separated)
            </label>
            <input 
              type="text"
              placeholder="e.g. holographic sparks, orbiting planets, moving gears..."
              className="w-full p-2 border rounded-md bg-slate-50 border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none"
              value={extraDetails}
              onChange={(e) => setExtraDetails(e.target.value)}
            />
          </div>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 relative group border border-slate-800">
          <h3 className="text-slate-400 text-xs font-mono uppercase tracking-widest mb-3">Generated Prompt</h3>
          <p className="text-slate-100 text-lg leading-relaxed font-serif italic">
            "{generatedPrompt}"
          </p>
          
          <button 
            onClick={copyToClipboard}
            className="mt-6 w-full flex items-center justify-center gap-2 py-3 px-4 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-all font-medium"
          >
            {copied ? (
              <><Check size={18} /> Copied to Clipboard</>
            ) : (
              <><Copy size={18} /> Copy Prompt</>
            )}
          </button>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
          <button 
            onClick={() => setShowGuide(!showGuide)}
            className="w-full flex items-center justify-between p-4 hover:bg-slate-50 transition-colors"
          >
            <span className="flex items-center gap-2 font-semibold text-slate-800">
              <Info size={18} className="text-blue-500" /> Model & Hardware Intelligence Guide
            </span>
            {showGuide ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
          
          {showGuide && (
            <div className="p-4 border-t border-slate-100 bg-slate-50/50 space-y-4 text-sm text-slate-600">
              <div>
                <h4 className="font-bold text-slate-900 mb-1 flex items-center gap-2"><Zap size={14} /> AI Model Differences</h4>
                <ul className="space-y-2">
                  <li><strong>Midjourney v6.1:</strong> Best for "Photorealistic" 3D textures and complex materials like glass/metal. Requires Discord or MJ Web.</li>
                  <li><strong>DALL-E 3:</strong> Unmatched prompt adherence. If you describe exactly where a planet should be, DALL-E puts it there.</li>
                  <li><strong>Stable Diffusion XL:</strong> The "Pro" choice for custom workflows. Best for Industrial/Cyberpunk styles that need gritty detail.</li>
                  <li><strong>Adobe Firefly v3:</strong> Commercially safe and excellent for architectural "cleanliness."</li>
                </ul>
              </div>
              <div className="pt-2 border-t border-slate-200">
                <h4 className="font-bold text-slate-900 mb-1 flex items-center gap-2"><Cpu size={14} /> Hardware Strategy</h4>
                <p>
                  <strong>High-End GPUs (H100/A100):</strong> Essential for "Monumental" scales where light bounces off millions of polygons (Subsurface Scattering).
                  <br />
                  <strong>RTX 4090/3090:</strong> The gold standard for local rendering and training custom "LoRA" weights for specific installation styles.
                </p>
              </div>
              <div className="pt-2 border-t border-slate-200 bg-blue-50/50 p-2 rounded">
                <h4 className="font-bold text-slate-900 mb-1 flex items-center gap-2 text-blue-700">🚀 No Springbase? No Problem.</h4>
                <p className="text-xs">
                  Your team can use these prompts directly in:
                  <ul className="list-disc ml-4 mt-1">
                    <li><strong>Midjourney:</strong> Type <code>/imagine prompt:</code> in Discord.</li>
                    <li><strong>DALL-E 3:</strong> Paste into ChatGPT Plus.</li>
                    <li><strong>Stable Diffusion:</strong> Use via DreamStudio or local install.</li>
                  </ul>
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="text-xs text-slate-400 text-center italic">
          Tip: Once copied, paste this prompt into your chosen AI tool (Midjourney, DALL-E, or Stable Diffusion) to see the rendition.
        </div>
      </div>
    </div>
  );
};

export default PromptGenerator;