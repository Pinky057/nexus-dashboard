"use client"

import * as React from "react"
import { Sparkles, User, Shield, Zap } from "lucide-react"
import { Avatar } from "@/components/ui/Avatar"

export default function AvatarsPage() {
  return (
    <div className="space-y-12 pb-20">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-2xl bg-primary-500/10 flex items-center justify-center border border-primary-500/20">
            <User className="h-5 w-5 text-primary-500" />
          </div>
          <h1 className="text-3xl font-black tracking-tighter text-foreground uppercase tracking-wider">Avatars</h1>
        </div>
        <p className="text-[11px] font-black text-muted uppercase tracking-[0.2em] ml-[52px]">Identity components with signature squircle geometry</p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Shapes Section */}
        <section className="bg-background/5 backdrop-blur-xl border-2 border-border-theme rounded-[2.5rem] p-8 space-y-8">
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="h-4 w-4 text-primary-500" />
            <h2 className="text-xs font-black uppercase tracking-[0.3em] text-foreground">Geometry & Shapes</h2>
          </div>
          
          <div className="flex flex-wrap items-center gap-8">
            <div className="flex flex-col items-center gap-3">
              <Avatar size="xl" shape="circle" src="https://ui-avatars.com/api/?name=Circle&background=6366f1&color=fff" />
              <span className="text-[9px] font-black uppercase tracking-widest text-muted">Circle</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Avatar size="xl" shape="rounded" src="https://ui-avatars.com/api/?name=Rounded&background=818cf8&color=fff" />
              <span className="text-[9px] font-black uppercase tracking-widest text-muted">Rounded-XL</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Avatar size="xl" shape="squircle" src="https://ui-avatars.com/api/?name=Squircle&background=a5b4fc&color=fff" />
              <span className="text-[9px] font-black uppercase tracking-widest text-primary-500">Squircle (Elite)</span>
            </div>
          </div>
        </section>

        {/* Status Section */}
        <section className="bg-background/5 backdrop-blur-xl border-2 border-border-theme rounded-[2.5rem] p-8 space-y-8">
          <div className="flex items-center gap-3 mb-6">
            <Zap className="h-4 w-4 text-emerald-500" />
            <h2 className="text-xs font-black uppercase tracking-[0.3em] text-foreground">Status Indicators</h2>
          </div>
          
          <div className="flex flex-wrap items-center gap-8">
            <Avatar size="lg" shape="squircle" status="online" src="https://ui-avatars.com/api/?name=Online&background=10b981&color=fff" />
            <Avatar size="lg" shape="squircle" status="busy" src="https://ui-avatars.com/api/?name=Busy&background=f43f5e&color=fff" />
            <Avatar size="lg" shape="squircle" status="away" src="https://ui-avatars.com/api/?name=Away&background=f59e0b&color=fff" />
            <Avatar size="lg" shape="squircle" status="offline" src="https://ui-avatars.com/api/?name=Offline&background=71717a&color=fff" />
          </div>
        </section>

        {/* Sizes Section */}
        <section className="bg-background/5 backdrop-blur-xl border-2 border-border-theme rounded-[2.5rem] p-8 space-y-8 lg:col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="h-4 w-4 text-indigo-500" />
            <h2 className="text-xs font-black uppercase tracking-[0.3em] text-foreground">Size Scale</h2>
          </div>
          
          <div className="flex flex-wrap items-end gap-10">
            <div className="flex flex-col items-center gap-3">
              <Avatar size="xs" shape="squircle" fallback="U" />
              <span className="text-[8px] font-black text-muted">XS</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Avatar size="sm" shape="squircle" fallback="U" />
              <span className="text-[8px] font-black text-muted">SM</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Avatar size="md" shape="squircle" fallback="U" />
              <span className="text-[8px] font-black text-muted">MD</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Avatar size="lg" shape="squircle" fallback="U" />
              <span className="text-[8px] font-black text-muted">LG</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Avatar size="xl" shape="squircle" fallback="U" />
              <span className="text-[8px] font-black text-muted">XL</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Avatar size="2xl" shape="squircle" fallback="U" />
              <span className="text-[8px] font-black text-muted">2XL</span>
            </div>
          </div>
        </section>

        {/* Fallbacks Section */}
        <section className="bg-background/5 backdrop-blur-xl border-2 border-border-theme rounded-[2.5rem] p-8 space-y-8 lg:col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="h-4 w-4 text-amber-500" />
            <h2 className="text-xs font-black uppercase tracking-[0.3em] text-foreground">Fallbacks & Glows</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-3xl bg-muted/5 border border-border-theme flex flex-col items-center gap-4">
              <Avatar size="xl" shape="squircle" isGlow />
              <p className="text-[10px] font-black text-muted uppercase tracking-widest text-center">Brand Glow Outline</p>
            </div>
            <div className="p-6 rounded-3xl bg-muted/5 border border-border-theme flex flex-col items-center gap-4">
              <Avatar size="xl" shape="squircle" fallback="JD" />
              <p className="text-[10px] font-black text-muted uppercase tracking-widest text-center">Initial Fallback</p>
            </div>
            <div className="p-6 rounded-3xl bg-muted/5 border border-border-theme flex flex-col items-center gap-4">
              <Avatar size="xl" shape="squircle" src="invalid-url" fallback="?" />
              <p className="text-[10px] font-black text-muted uppercase tracking-widest text-center">Error Fallback</p>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}
