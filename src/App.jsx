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
  const [palette, setPalette] = useState('Monochromatic Gold');
  const [hasFlowers, setHasFlowers] = useState('No');
  const [flowerNames, setFlowerNames] = useState('');
  const [extraDetails, setExtraDetails] = useState('');
  const [copied, setCopied] = useState(false);
  const [showGuide, setShowGuide] = useState(false);

  const styles = ['Art Deco', 'Bio-Futurism', 'Neo-Classical', 'Cyber-Deco', 'Organic Minimalist', 'Mid-Century Modern', 'Parametric Fluidity', 'Industrial Grunge'];
  const materials = [
    'Frosted Glass & Gold', 'Iridescent Acrylic', 'Polished Chrome & Marble', 'Raw Concrete & Neon', 'Velvet & Brass', 'Liquid Metal', 'Translucent Resin', 'Sustainable Bamboo & Copper', 
    'MDF & ply', 'Thermocol & sholapith', 'Fibre glass & paintwork', 'Clay & paint',
    'Brushed Aluminum', 'Oxidized Copper', 'Antique Bronze', 'Hammered Silver',
    'Woven Rattan', 'Raw Silk', 'Jute Twine', 'Recycled Paper Pulp'
  ];
  const lightings = ['Volumetric Cinematic', 'Soft Ambient Glow', 'High-Contrast Studio', 'Cyberpunk Neon', 'Natural Skylight', 'Dichroic Prism Lighting', 'Golden Hour Warmth', 'Subsurface Scattering'];
  const settings = ['Minimalist Gallery', 'Luxury Hotel Lobby', 'Outdoor Zen Garden', 'Surreal Void', 'Industrial Loft', 'Futuristic Airport Terminal', 'Underwater Atrium', 'Mountain-top Retreat'];
  const sizes = ['Large-scale Monumental', 'Immersive Walk-through', 'Human-sized Focal Point', 'Table-top Sculptural', 'Ceiling-suspended Kinetic'];
  const audiences = ['High-end Luxury Seekers', 'Tech Enthusiasts', 'Art Gallery Collectors', 'Corporate Executives', 'General Public / Tourists', 'Eco-conscious Minimalists'];
  const models = ['Midjourney v6.1', 'DALL-E 3', 'Stable Diffusion XL', 'Leonardo AI (Kandinsky)', 'Adobe Firefly v3'];
  const gpus = ['NVIDIA RTX 4090 (24GB)', 'NVIDIA RTX 3090', 'A100 Tensor Core (Cloud)', 'H100 NVL (High-End Enterprise)', 'Apple M3 Max (Local Rendering)'];
  const palettes = ['Monochromatic Gold', 'Deep Emerald & Brass', 'Pastel Sunset Hues', 'Midnight Blue & Silver', 'Vibrant Festive Marigold', 'Earth Tone Ochre', 'Cyberpunk Neon Pink & Teal', 'Neutral Sand & Stone'];
  const indianFlowers = ['Marigold (Genda)', 'Jasmine (Mogra)', 'Lotus (Kamal)', 'Hibiscus (Gudhal)', 'Rose (Gulab)', 'Frangipani (Champa)', 'Bougainvillea', 'Orchids'];

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

  const generatedPrompt = `A high-end 3D rendition of a ${size} ${style} decorative installation, designed to appeal to ${audience}. The color palette follows a ${palette} scheme. The structure is crafted from ${material}, featuring intricate patterns and unique forms. ${hasFlowers === 'Yes' ? `Incorporating a floral arrangement featuring ${flowerNames || 'traditional Indian flowers'}. ` : ''}${extraDetails ? `Additional features: ${extraDetails}. ` : ''}Set within a ${setting}, illuminated by ${lighting} lighting that emphasizes textures and reflections. Optimized for ${model} rendering with ${gpuSafe} compute acceleration. Rendered in 8k resolution, Unreal Engine 5 style, hyper-realistic, architectural photography, sharp focus, Octane render --v 6.1`;

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
    <div className="flex flex-col h-full bg-[#f8fafc] p-6 font-sans">
      <div className="max-w-3xl mx-auto w-full space-y-8">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles size={12} /> AI-Powered Rendering Engine
          </div>
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">
            3D Installation <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Prompt Pro</span>
          </h1>
          <p className="text-slate-500 text-lg max-w-lg mx-auto">Architectural-grade prompt engineering for high-end decorative installations.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5 bg-white p-8 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-200">
          <div className="space-y-2">
            <label className="text-[13px] font-bold text-slate-500 uppercase tracking-wide flex items-center gap-2">
              <Palette size={14} className="text-indigo-500" /> Artistic Style
            </label>
            <select 
              className="w-full p-2.5 border rounded-lg bg-slate-50 border-slate-200 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all cursor-pointer text-slate-700 font-medium"
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

          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
              <Palette size={16} className="text-pink-500" /> Color Palette & Hues
            </label>
            <select 
              className="w-full p-2 border rounded-md bg-slate-50 border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none"
              value={palette}
              onChange={(e) => setPalette(e.target.value)}
            >
              {palettes.map(p => <option key={p} value={p}>{p}</option>)}
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
              <Sparkles size={16} className="text-orange-500" /> Floral Requirement?
            </label>
            <div className="flex gap-4 p-2">
              {['Yes', 'No'].map(opt => (
                <label key={opt} className="flex items-center gap-2 cursor-pointer">
                  <input 
                    type="radio" 
                    name="hasFlowers" 
                    value={opt} 
                    checked={hasFlowers === opt}
                    onChange={(e) => setHasFlowers(e.target.value)}
                    className="w-4 h-4 text-blue-600"
                  />
                  <span className="text-sm text-slate-700 font-medium">{opt}</span>
                </label>
              ))}
            </div>
          </div>

          {hasFlowers === 'Yes' && (
            <div className="space-y-2 md:col-span-2 bg-orange-50/50 p-4 rounded-xl border border-orange-100">
              <label className="text-sm font-semibold text-orange-800 flex items-center gap-2">
                🌸 Select Indian Flower Types
              </label>
              <div className="flex flex-wrap gap-2 mb-3">
                {indianFlowers.map(flower => (
                  <button
                    key={flower}
                    onClick={() => {
                      const current = flowerNames.split(',').map(f => f.trim()).filter(f => f);
                      if (current.includes(flower)) {
                        setFlowerNames(current.filter(f => f !== flower).join(', '));
                      } else {
                        setFlowerNames([...current, flower].join(', '));
                      }
                    }}
                    className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                      flowerNames.includes(flower) 
                        ? 'bg-orange-500 text-white' 
                        : 'bg-white text-orange-600 border border-orange-200 hover:border-orange-400'
                    }`}
                  >
                    {flower}
                  </button>
                ))}
              </div>
              <input 
                type="text"
                placeholder="Or type custom flower names..."
                className="w-full p-2 border rounded-md bg-white border-orange-200 focus:ring-2 focus:ring-orange-500 outline-none"
                value={flowerNames}
                onChange={(e) => setFlowerNames(e.target.value)}
              />
            </div>
          )}

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

        <div className="bg-slate-900 rounded-2xl p-8 relative overflow-hidden group border border-slate-800 shadow-2xl shadow-blue-900/20">
          <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
            <Zap size={40} className="text-blue-400" />
          </div>
          
          <h3 className="text-blue-400 text-[11px] font-bold uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span> Final Prompt Output
          </h3>
          
          <div className="relative">
            <p className="text-slate-100 text-xl leading-relaxed font-serif italic selection:bg-blue-500/30">
              "{generatedPrompt}"
            </p>
          </div>
          
          <button 
            onClick={copyToClipboard}
            className={`mt-8 w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl transition-all font-bold text-sm tracking-wide ${
              copied 
                ? 'bg-green-500 text-white shadow-lg shadow-green-500/20' 
                : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-lg shadow-blue-600/20'
            }`}
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
